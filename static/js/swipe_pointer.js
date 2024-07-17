const keyframes = `
@keyframes springAnimation {
  0% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  10% {
    transform: translateX(-100px);
    animation-timing-function: ease-in-out;
  }
  20% {
    transform: translateX(80px);
    animation-timing-function: ease-in-out;
  }
  30% {
    transform: translateX(-60px);
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: translateX(40px);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: translateX(-20px);
    animation-timing-function: ease-in-out;
  }
  60% {
    transform: translateX(10px);
    animation-timing-function: ease-in-out;
  }
  70% {
    transform: translateX(-5px);
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: translateX(2px);
    animation-timing-function: ease-in-out;
  }
  90% {
    transform: translateX(-1px);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
}

.spring-animation {
  animation: springAnimation 2s infinite;
}
`;

const style = document.createElement("style");
style.innerHTML = keyframes;

const TAP_IMG = "static/img/swipe_tap.png";
const CLICK_IMG = "static/img/swipe_click.png";

const swipeImgSrc = { tap: TAP_IMG, click: CLICK_IMG };

window.addEventListener("load", loadCursor);

window.addEventListener("resize", () => {
  window.removeEventListener("load", loadCursor);
  let img = document.getElementById("swipe-hint");
  if (img) {
    img.remove();
  }
  loadCursor();
});

let observer;
let img;
function loadCursor() {
  const inputType = detectInputMethod();
  if (!inputType) return;

  const sv = document.querySelector("spline-viewer");
  const c = sv.shadowRoot.querySelector("canvas#spline");

  if (!img) {
    img = getImg(inputType);
    c.parentElement.appendChild(style);
    c.parentElement.insertBefore(img, c);
  } else {
    img.style.display = "block";
  }

  setTimeout(() => {
    img.style.opacity = 100;
  }, 500);
  setTimeout(() => {
    img.style.opacity = 0;
  }, 3500);
  setTimeout(() => {
    img.style.display = "none";
  }, 5000);

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  };
  if (!observer) {
    observer = new IntersectionObserver(loadCursor, options);
    observer.observe(sv);
  }
}

function getImg(inputType) {
  const imgSrc = swipeImgSrc[inputType];
  const img = document.createElement("img");
  img.draggable = false;
  img.style.opacity = 0;
  img.id = "swipe-hint";
  img.src = imgSrc;
  img.style.position = "absolute";
  img.style.left = "calc(50vw - 55px)";
  img.style.top = "calc(50% - 100px)";
  img.className = "spring-animation";
  img.style.transition = "opacity 2s";
  img.style.userSelect = "none";
  img.addEventListener("pointerdown", () => {
    img.style.display = "none";
  });

  return img;
}

function detectInputMethod() {
  const hasTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
  const hasMouse = "onmousedown" in window;

  if (hasTouch) {
    return "tap"; // Device supports only tap
  } else if (hasMouse) {
    return "click"; // Device supports only click
  } else {
    return null; // No support for tap or click
  }
}
