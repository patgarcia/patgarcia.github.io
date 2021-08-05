function createTessellate(
  den = 300,
  tessellationLimit = null,
  interactive = false,
  scrollYPosition = null,
  startVal = 0.5,
  stopVal = 0.5
) {
  let group;

  /*=======
    COLORS
    ========*/

  // Rainbow color generator
  function generateRainbowColors(
    steps = 3,
    startingColor = {
      r: 255,
      g: 0,
      b: 0,
    },
    clockwise = true
  ) {
    // must start with 255 in one of the r,g,b
    // either one r,g,b vals is always 255 - pivotColor
    let pivotColor = 255;
    let increment = pivotColor / (steps - 1);
    let startingColorArray = Object.values(startingColor);
    let indexOfPivotColor = startingColorArray.indexOf(pivotColor);

    if (!clockwise) {
      startingColorArray.reverse();
    }

    // get indices and values of colors adjacent to pivotColor
    let leftOfPivot =
      indexOfPivotColor === 0
        ? startingColorArray.length - 1
        : indexOfPivotColor - 1;
    let rightOfPivot =
      indexOfPivotColor + 1 === startingColorArray.length
        ? 0
        : indexOfPivotColor + 1;
    let leftOfPivotVal = startingColorArray[leftOfPivot];
    let rightOfPivotVal = startingColorArray[rightOfPivot];

    if (leftOfPivotVal === 255 || rightOfPivotVal === 255) {
      if (leftOfPivotVal === 255) {
        startingColorArray[leftOfPivot] -= increment;
      } else {
        startingColorArray[indexOfPivotColor] -= increment;
      }
    } else {
      if (leftOfPivotVal > 0) {
        startingColorArray[leftOfPivot] = Math.max(
          leftOfPivotVal - increment,
          0
        );
      } else {
        startingColorArray[rightOfPivot] = Math.min(
          rightOfPivotVal + increment,
          pivotColor
        );
      }
    }

    if (!clockwise) {
      startingColorArray.reverse();
    }

    [startingColor.r, startingColor.g, startingColor.b] = startingColorArray;

    return startingColor;
  }
  // colorsNum is the numbers of segments the color wheel will have
  let colorsNum = 80;
  // The colorWheelRatio @ 5.125 makes the color wheel span the entire RGB
  // color space a single time based on how many segments, or number of colors
  // is the circle divided in (colorsNum).
  let colorWheelRatio = 5.125;
  let colorSteps = colorsNum / colorWheelRatio;
  let currentColor = generateRainbowColors(colorSteps);
  const colorData = { colorsNum, colorWheelRatio, colorSteps, currentColor };

  // LOOP BODY
  // We create a raninbowColors array filled with null objects
  // to be populated as needed and removed to avoid garbage collection
  const rainbowColors = Array(colorsNum).fill(null);

  // Here we add the alpha for the tessellate triangles
  rainbowColors.forEach((_, i) => {
    rainbowColors[i] = `rgba(${Math.floor(currentColor.r)}, ${Math.floor(
      currentColor.g
    )}, ${Math.floor(currentColor.b)}, .6)`;
    currentColor = generateRainbowColors(colorSteps, currentColor);
  });

  let webColors = rainbowColors;

  // desaturate tessellate
  // webColors = webColors.map(color => desaturateRGBAString(color));

  //Color desaturation
  function desaturateRGB(r, g, b) {
    /* 
        Weighted method for desaturation
        https://www.tutorialspoint.com/dip/grayscale_to_rgb_conversion.htm
        */
    return 0.3 * r + 0.59 * g + 0.11 * b;
  }

  function desaturateRGBAString(rgbaString) {
    let [r, g, b, a] = rgbaNumsFromString(rgbaString);
    let value = Math.floor(desaturateRGB(r, g, b));
    return rgbaStringFromNums(value, value, value, a);
  }

  /*======
    TOOLS
    =======*/

  const rgbaNumsFromString = rgbaString => {
    // Returns rgba as numeric values from an rgba string
    let leftParen = rgbaString.indexOf('(');
    let rightParen = rgbaString.indexOf(')');
    let [r, g, b, a] = rgbaString.slice(leftParen + 1, rightParen).split(',');
    a = !a ? 1 : a;
    return [Number(r), Number(g), Number(b), Number(a)];
  };

  const rgbaStringFromNums = (r, g, b, a) => `rgba(${r},${g},${b},${a})`;

  const modifyColors = (
    r,
    g,
    b,
    a,
    colorFn = c => 255 - c,
    alphaFn = α => α
  ) => {
    // Returns modified values for each r,g,b color and alpha
    // using the passed functions for each.
    // Default bahvior: Invert color.
    r = colorFn(r);
    g = colorFn(g);
    b = colorFn(b);
    a = alphaFn(a);
    return [r, g, b, a];
  };

  const invertColors = rgbaString => {
    let rgba = rgbaNumsFromString(rgbaString);
    return rgbaStringFromNums(...modifyColors(...rgba));
  };

  const darkenColor = (rgbaString, percentage = 0.05) => {
    let rgbaFn = rgbaNumsFromString(rgbaString);
    rgbaFn.push(c => c - c * percentage);
    return rgbaStringFromNums(...modifyColors(...rgbaFn));
  };
  const lightenColor = (rgbaString, percentage = 0.05) => {
    let rgbaFn = rgbaNumsFromString(rgbaString);
    rgbaFn.push(c => c + c * percentage);
    return rgbaStringFromNums(...modifyColors(...rgbaFn));
  };

  const darkenColor255 = (rgbaString, percentage = 0.05) => {
    let rgbaFn = rgbaNumsFromString(rgbaString);
    rgbaFn.push(c => c - 255 * percentage);
    return rgbaStringFromNums(...modifyColors(...rgbaFn));
  };
  const lightenColor255 = (rgbaString, percentage = 0.05) => {
    let rgbaFn = rgbaNumsFromString(rgbaString);
    rgbaFn.push(c => c + 255 * percentage);
    return rgbaStringFromNums(...modifyColors(...rgbaFn));
  };

  const epsilon = 0.05;

  const point = (x, y) => ({
    x: x,
    y: y,
  });

  const comparePoints = (P1, P2) =>
    P1.x.toFixed(2) === P2.x.toFixed(2) && P1.y.toFixed(2) === P2.y.toFixed(2);

  const euclideanDist = (dx, dy) => Math.sqrt(dx ** 2 + dy ** 2);

  const LineEquation = (m, b) => x => m * x + b;

  const randomPlusOrMinus = () => Math.round(Math.random()) * 2 - 1;

  const getRandomDecimal = (start = 0.3, stop = 0.7) =>
    (Math.random() * (stop - start) + start).toFixed(2);

  const pointWithinWindow = point =>
    0 < point.x &&
    point.x < window.innerWidth &&
    0 < point.y &&
    point.y < window.innerHeight;

  const pointWithinElement = (elem, point) =>
    0 < point.x &&
    point.x < window.innerWidth &&
    0 < point.y &&
    point.y < window.innerHeight;

  /*============
    DEBUG TOOLS
    =============*/

  const logPathData = tempPath => {
    console.log(
      tempPath.block,
      '\n',
      'epsilon',
      tempPath.epsilon,
      '\n',
      'opp',
      tempPath.opp,
      '\n',
      'm',
      tempPath.line.m,
      '\n',
      'random dist scalar',
      tempPath.randomDistance,
      '\n',
      'dist',
      tempPath.dist,
      '\n',
      'percentage',
      tempPath.percentage,
      '\n',
      'line direction',
      tempPath.line.direction,
      '\n'
    );
  };

  /*===============
    BUSINESS LOGIC
    ================*/

  // TODO: Refactor to use proper factory function programming pattern
  function lineFactory(P1, P2) {
    // return line object which includes its equational expression
    // in the form of y = mx + b
    // where (m) is the slope and (b) the y intercept
    // as well as the points used to calculate it and other
    // details about the line segment formed by said points

    const dx = P2.x - P1.x;
    const dy = P2.y - P1.y;

    // m = delta y / delta x
    const m = dy / dx;

    // calculate y intercept
    const b = m * P1.x - P1.y;

    lineEquation = LineEquation(m, b);

    return {
      lineEquation: lineEquation,
      m: m,
      b: b,
      dx: dx,
      dy: dy,
      direction: m / Math.abs(m),
      dist: euclideanDist(dx, dy),
      P1: P1,
      P2: P2,
    };
  }

  const createPath = (
    points,
    closed = true,
    curved = false,
    parentPath = null
  ) => {
    // Create Two.Path, expects point type array as input
    const anchors = [];
    points.forEach(p => {
      const anchor = new Two.Anchor(p.x, p.y);
      anchors.push(anchor);
    });
    const path = two.makePath(anchors, (closed = closed), (curved = curved));

    return path;
  };

  const findPointInLine = (line, startLim = 0.4, endLim = 0.6) => {
    // Return a random point in the line which will serve
    // as the intersection for the orthagonal proyection
    locationInLine = getRandomDecimal(startLim, endLim);
    intersectionPointX = (line.P1.x + line.P2.x) * locationInLine;
    intersectionPointY = (line.P1.y + line.P2.y) * locationInLine;

    return point(intersectionPointX, intersectionPointY);
  };

  const tessallationDensity = () => {
    const scalar = getRandomDecimal((start = 0.2), (stop = 0.3));
    const windowDiagonal = euclideanDist(window.innerWidth, window.innerHeight);

    return windowDiagonal * scalar;
  };

  const orthogonalProjection = (
    line,
    lineIntersect,
    distFromLine,
    plusOrMinus = randomPlusOrMinus()
  ) => {
    // Return point object within an orthogonal projection from line
    // that is at a distFromLine

    // generate unit vector from line
    const unitVector = point(line.dx / line.dist, line.dy / line.dist);
    let ovX = lineIntersect.x + distFromLine * unitVector.y * plusOrMinus;
    let ovY = lineIntersect.y - distFromLine * unitVector.x * plusOrMinus;

    return point(ovX, ovY);
  };

  const getOrthogonalProjectionPoint = (
    line,
    distance,
    projectionDirection,
    percentage = getRandomDecimal(),
    startLim = 0.3,
    endLim = 0.7
  ) => {
    // Return point object within the orthagonal line
    // that intersects the line at the intersectionPoint
    // and it is located at a distance between 30% to 70% the length
    // of the line segment (by default). Modify the start and stop
    // params in getRandomDecimal to widen or shorten this range
    // the projectionDirection determines to which side of the line
    // the projection takes place
    const intersectionPoint = findPointInLine(line, startLim, endLim);
    const ov = orthogonalProjection(
      line,
      intersectionPoint,
      distance * percentage,
      projectionDirection
    );

    return ov;
  };

  /*======
    SETUP
  =======*/

  // scroll document to top, necessary for document.elementFromPoint to work
  // since it returns null if "the specified point is outside the visible bounds of the document"
  window.scrollTo({ top: 0 });

  // body BG color
  // document.body.style.background = 'rgba(250, 250, 250, .99)';

  // Clicked polygon is assigned to this variable
  // used for debugging.
  let clickedElem = 'test';

  let container;
  // Two.js container
  if (interactive) {
    container = document.querySelector('.two-container');
  } else {
    container = document.createElement('div');
    container.className = 'two-container';
    // document.body.appendChild(container);
    document.body.prepend(container);
  }

  // title
  // let title = document.createElement('h1');
  // title.innerText = "tes·sel·late";
  // document.body.appendChild(title);

  // Two.js initialization
  const two = new Two({
    width: window.innerWidth,
    height: Math.max(window.innerHeight / 2, 1000), // Without the Math.max the polygon distro is even, but not good for mobile
    autostart: true,
  });

  // Mount two object
  two.appendTo(container);

  // const density = tessallationDensity();
  const density = den; //300

  // randomStart
  let randomStart = Math.floor(Math.random() * 8) / 10;
  let randomEnd = randomStart + 0.2;

  // generate initial point within 0 and 0.8 (randomStart) for both axes
  let P1 = point(
    getRandomDecimal((start = randomStart), (stop = randomStart)) * density,
    getRandomDecimal((start = randomStart), (stop = randomStart)) * density
  );
  // generate subsequent point 0.2 decimals from randomStart in both axes
  let P2 = point(
    getRandomDecimal((start = randomEnd), (stop = randomEnd)) * density,
    getRandomDecimal((start = randomEnd), (stop = randomEnd)) * density
  );

  // limit P1 and P2 to be inside window.innerWidth and window.innerHeight
  function adjustPoint(point) {
    if (point.x > window.innerWidth) {
      point.x = point.x - window.innerWidth;
      point.y = point.y - window.innerWidth;
    }
    return point;
  }
  P1 = adjustPoint(P1);
  P2 = adjustPoint(P2);

  const initLine = lineFactory(P1, P2);

  let tessellateCounter = 0;
  // let tessellationLimit = Math.floor(window.innerWidth / 5);
  // tessellationLimit now passed as parameter
  tessellationLimit =
    tessellationLimit == null
      ? Math.floor(window.innerWidth / 4.5)
      : tessellationLimit;
  tessellationLimit = tessellationLimit < 100 ? 100 : tessellationLimit;
  let colorCounter = 0;

  /*=====================
        TESSELLATE RECURSION
    =====================*/

  // Creates Polygon path and calls Tessellate
  const pathCreator = (
    line,
    P1,
    P2,
    oppEpsilon,
    directionSign = 1,
    start = 0.5,
    stop = 0.5
  ) => {
    // CODE THAT CHECKS FOR ELEMENT FROM POINT (X,Y)
    let pathNode = document.elementFromPoint(oppEpsilon.x, oppEpsilon.y);
    let nodeString = pathNode ? pathNode.toString() : null;

    if (
      nodeString == '[object SVGSVGElement]' &&
      tessellateCounter < tessellationLimit
    ) {
      let run_tessellate = false;

      let randomDistance = getRandomDecimal(start, stop);
      let percentage = getRandomDecimal(start, stop);
      const opp = getOrthogonalProjectionPoint(
        line,
        randomDistance * density,
        (projectionDirection = directionSign * line.direction),
        (percentage = percentage),
        (startLim = 0.5),
        (endLim = 0.5)
      );

      if (pointWithinWindow(oppEpsilon)) {
        const webColor = webColors[colorCounter % webColors.length];
        const path = createPath([P1, P2, opp]);

        path.fill = webColor;
        path.stroke = darkenColor(webColor, 0.025);
        colorCounter++;

        // update two object to create ._renderer.elem DOM object
        two.update();

        path.clickSelected = false;
        let currentElem = path._renderer.elem;

        // Bring opacity to 0
        currentElem.style.opacity = 0;

        path.color = webColor;
        path.bw = desaturateRGBAString(webColor);
        currentElem.onclick = () => {
          if (clickedElem != path) {
            clickedElem = path;
            // logPathData(path) // To use this load path with required properties by logPathData
          }
          if (!path.clickSelected) {
            path.fill = darkenColor255(path.color, 0.7);
          } else {
            path.fill = path.color;
          }
          path.clickSelected = !path.clickSelected;
        };
        currentElem.onmouseover = e => {
          path.fill = invertColors(path.color);
        };
        currentElem.onmouseout = e => {
          if (path.clickSelected) {
            path.fill = darkenColor255(path.color, 0.7);
          } else {
            path.fill = path.color;
          }
        };

        tessellateCounter++;

        run_tessellate = true;
      }

      if (run_tessellate) {
        tessellate(lineFactory(P1, opp));
        tessellate(lineFactory(P2, opp));
      }
    }
  };

  this.tessellate = function (line) {
    const { P1, P2 } = line;

    const oppEpsilonPositive = getOrthogonalProjectionPoint(
      line,
      5,
      (projectionDirection = line.direction),
      (percentage = 1),
      (startLim = 0.5),
      (endLim = 0.5)
    );
    const oppEpsilonNegative = getOrthogonalProjectionPoint(
      line,
      5,
      (projectionDirection = -1 * line.direction),
      (percentage = 1),
      (startLim = 0.5),
      (endLim = 0.5)
    );

    pathCreator(
      line,
      P1,
      P2,
      oppEpsilonPositive,
      (directionSign = 1),
      startVal,
      stopVal
    );
    pathCreator(
      line,
      P1,
      P2,
      oppEpsilonNegative,
      (directionSign = -1),
      startVal,
      stopVal
    );
  };
  window.line = initLine;

  // funky adjustment to check if warning is showing
  const dangerHud = document.querySelector('.hud-danger');
  window.dan = dangerHud;
  console.log(dangerHud);
  if (dangerHud) dangerHud.remove();

  this.tessellate(initLine);
  /*==============
    MOUSE DISPLAY
    ==============*/
  let mouseCoordinatesHUD = document.createElement('div');
  mouseCoordinatesHUD.id = 'mouse-coordinates-hud';
  mouseCoordinatesHUD.innerText = `x: \n y: `;
  document.body.appendChild(mouseCoordinatesHUD);
  window.onmousemove = e => {
    mouseCoordinatesHUD.innerText = `x: ${e.pageX} \n y: ${e.pageY}`;
  };

  /*==========
    DARK MODE
    ==========*/
  this.twoJSChildrenColorNegative = () => {
    Array.from(two.scene.children).forEach(child => {
      child.color = invertColors(child.color);
      if (child.clickSelected) {
        child.fill = darkenColor255(child.color, 0.7);
      } else {
        child.fill = child.color;
      }
      child.stroke = darkenColor(child.color);
    });
  };

  window.two = two;
  this.getTessellate = function (interactive = false, scrollYPosition = null) {
    if (!interactive) {
      let container = document.querySelector('.two-container');
      container.style.position = 'absolute';
      container.style.top = '222px';
    }
    two.scene.children.forEach(child => {
      let currentTranslationY = child.translation.y;
      child.translation.y = -(Math.random() * 200) - 200;
      setTimeout(() => {
        child.translation.y = currentTranslationY;
        child._renderer.elem.style.opacity = 1;
      }, Math.random() * 300 + 200);
    });
    container.style.opacity = 1;
  };

  this.initTessellate = function (
    density = 300,
    tessellationLimit = null,
    interactive = false,
    scrollYPosition = null,
    startVal = 0.5,
    stopVal = 0.5
  ) {
    window.tess = createTessellate(
      density,
      tessellationLimit,
      interactive,
      scrollYPosition,
      startVal,
      stopVal
    );
    this.getTessellate(interactive);
    window.addEventListener('resize', ev => {
      if (ev.target.innerWidth !== window.prevWidth) {
        tess.destroyTessellate();
        window.prevWidth = ev.target.innerWidth;
      }
    });
    if (scrollYPosition && !interactive) {
      window.scrollTo(0, scrollYPosition);
    }
  };
  let resize_timeout;
  this.destroyTessellate = function (
    density = 300,
    tessellationLimit = null,
    interactive = false,
    scrollYPosition = null,
    startVal = 0.5,
    stopVal = 0.5
  ) {
    if (two.scene.children.length) {
      two.scene.children.forEach(child => {
        const currPosY = child.position.y;
        window.child = child;
        setTimeout(() => {
          child.translation.y = Math.random() * 200 - 500;
          child._renderer.elem.style.opacity = 0.5;
        }, Math.random() * 300 + 200);
      });
      // handle resize bounce
      if (!resize_timeout) {
        resize_timeout = setTimeout(() => {
          while (two.scene.children.length) {
            two.scene.children.forEach(child => child.remove());
          }
          const tempContainer = document.querySelector('.two-container');
          if (!interactive) {
            tempContainer.remove();
          } else {
            tempContainer.innerHTML = '';
          }
          // Check scroll position in page before destroying the tessellate
          // and scroll back to that position once tessellate is recreated
          scrollYPosition =
            window.scrollY != 0 ? window.scrollY : scrollYPosition;
          this.initTessellate(
            density,
            tessellationLimit,
            interactive,
            scrollYPosition,
            startVal,
            stopVal
          );
          resize_timeout = null;
        }, 750);
      }
    }
  };

  return this;
} // end of createTessellate

/*=====================
   CUSTOM CONTROLLERS
=====================*/

function removeControls() {
  console.log('removeControls called');
  document.querySelector('.controls').remove();
}

function closeInteractiveTessellate() {
  // enable scroll
  document.body.style.margin = '';
  document.body.style.height = '';
  document.body.style.overflow = '';
  removeControls();
  window.tess.destroyTessellate();
}

function handleChange(ev) {
  // window.tess.destroyTessellate(ev.target.value, null, true);
  const controls = document.querySelector('.controls');
  const inputs = controls.querySelectorAll('input');
  // TODO: look into modifying createTessellate to use object properties as named arguments
  // https://afontcu.medium.com/cool-javascript-9-named-arguments-functions-that-get-and-return-objects-337b6f8cfa07
  const options = Array.from(inputs).reduce(
    (acc, i) => ({ [i.name]: i.value, ...acc }),
    {}
  );
  const size = options.size;
  const limit = options.limit;
  const startVal = options.startVal / 100;
  const stopVal = options.stopVal / 100;
  const scrollPosition = null;
  window.tess.destroyTessellate(
    size,
    limit,
    true,
    scrollPosition,
    startVal,
    stopVal
  );
}

function resetInteractiveTessellate() {
  removeControls();
  interactiveTessellate();
}

function interactiveTessellate() {
  window.tess.destroyTessellate(300, null, true);

  // Move to top of window
  window.scrollTo(0, 0);

  // disable scroll
  document.body.style.margin = 0;
  document.body.style.height = '100%';
  document.body.style.overflow = 'hidden';
  const container = document.querySelector('.two-container');
  container.style.top = 0;
  container.style.zIndex = 4;
  container.style.backgroundColor = 'var(--color-1)';
  // controls
  controls = document.createElement('div');
  controls.className = 'controls';

  // content display HUD
  hud = document.createElement('div');
  hud.className = 'hud';
  controls.appendChild(hud);

  let timeOut;
  let intervalId;
  function hudContentChange(ev) {
    intervalId = setInterval(() => {
      hud.innerText = '';
      hud.style.opacity = 1;
      const input = ev.target;
      const label = input.getAttribute('data-hud');
      let danger = '';
      if (input.name === 'size' && input.value < 300) {
        danger =
          "<span class='hud-danger'>🛑 Polygons smaller than 300, may take long to render if polygon density too high.</span>";
      }
      hud.innerHTML = `${label}: ${input.value} ${danger}`;
      clearTimeout(timeOut);
      timeOut = setTimeout(() => hudClear(), 600);
    }, 100);
  }
  function redrawTessellate(ev) {
    clearInterval(intervalId);
    handleChange(null);
  }

  function hudClear() {
    console.log('HUD CLEAR RAN');
    hud.style.opacity = 0;
  }

  // TODO: handle input instantiation with a loop
  // density (size)
  input = document.createElement('input');
  input.type = 'range';
  input.onmousedown = hudContentChange;
  input.onmouseup = redrawTessellate;
  input.addEventListener('touchstart', hudContentChange);
  input.addEventListener('touchend', redrawTessellate);
  input.min = 50;
  input.max = 1000;
  input.value = 300;
  input.className = 'slider';
  input.name = 'size';
  input.setAttribute('data-hud', 'polygon size');
  controls.appendChild(input);

  // limit (tessellationLimit)
  // if null it's calculated based on window width

  input = document.createElement('input');
  input.type = 'range';
  input.onmousedown = hudContentChange;
  input.onmouseup = redrawTessellate;
  input.addEventListener('touchstart', hudContentChange);
  input.addEventListener('touchend', redrawTessellate);
  input.min = 100;
  input.max = 2000;
  input.value = 50;
  input.className = 'slider';
  input.name = 'limit';
  input.setAttribute('data-hud', 'polygon density');
  controls.appendChild(input);

  // startVal (size)
  input = document.createElement('input');
  input.type = 'range';
  input.onmousedown = hudContentChange;
  input.onmouseup = redrawTessellate;
  input.addEventListener('touchstart', hudContentChange);
  input.addEventListener('touchend', redrawTessellate);
  input.min = 10;
  input.max = 90;
  input.value = 50;
  input.className = 'slider';
  input.setAttribute('data-hud', 'distort factor A');
  input.name = 'startVal';
  controls.appendChild(input);

  // stopVal (size)
  input = document.createElement('input');
  input.type = 'range';
  input.onmousedown = hudContentChange;
  input.onmouseup = redrawTessellate;
  input.addEventListener('touchstart', hudContentChange);
  input.addEventListener('touchend', redrawTessellate);
  input.min = 10;
  input.max = 90;
  input.value = 50;
  input.className = 'slider';
  input.setAttribute('data-hud', 'distort factor B');
  input.name = 'stopVal';
  controls.appendChild(input);

  button = document.createElement('button');
  button.innerText = 'reset';
  button.onclick = resetInteractiveTessellate;
  controls.appendChild(button);
  // <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>

  button = document.createElement('button');
  button.innerText = 'close';
  button.onclick = closeInteractiveTessellate;
  controls.appendChild(button);

  document.body.prepend(controls);
}

/*=============
  DOWNLOAD IMAGE
=============*/
function downloadImage() {
  const svg = document.querySelector('svg');
}

/*=============
  WINDOW READY
=============*/

// TODO: Move resize handler inside createTessellate
function resizeHandler(ev) {
  window.removeEventListener('resize', ev => {
    removeControls();
    tess.destroyTessellate();
  });
}

window.onload = () => {
  window.tess = createTessellate(300);
  tess.getTessellate();
  window.prevWidth = window.innerWidth;
  window.addEventListener('resize', ev => {
    if (ev.target.innerWidth !== window.prevWidth) {
      tess.destroyTessellate();
      window.prevWidth = ev.target.innerWidth;
    }
  });
};
