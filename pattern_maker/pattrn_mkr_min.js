const _0x4f137a = _0x3bc0;
(function (_0x43281a, _0x48ca35) {
  const _0x2330f1 = _0x3bc0,
    _0x475ca2 = _0x43281a();
  while (!![]) {
    try {
      const _0x25f3b0 =
        parseInt(_0x2330f1(0x1ba)) / 0x1 +
        (parseInt(_0x2330f1(0x1a4)) / 0x2) *
          (-parseInt(_0x2330f1(0x174)) / 0x3) +
        (parseInt(_0x2330f1(0x1d7)) / 0x4) *
          (parseInt(_0x2330f1(0x190)) / 0x5) +
        (-parseInt(_0x2330f1(0x17a)) / 0x6) *
          (-parseInt(_0x2330f1(0x1db)) / 0x7) +
        parseInt(_0x2330f1(0x19a)) / 0x8 +
        (parseInt(_0x2330f1(0x186)) / 0x9) *
          (-parseInt(_0x2330f1(0x196)) / 0xa) +
        (-parseInt(_0x2330f1(0x1a2)) / 0xb) *
          (parseInt(_0x2330f1(0x178)) / 0xc);
      if (_0x25f3b0 === _0x48ca35) break;
      else _0x475ca2['push'](_0x475ca2['shift']());
    } catch (_0x589c96) {
      _0x475ca2['push'](_0x475ca2['shift']());
    }
  }
})(_0x3f9d, 0xba4b3);
const canvas = document[_0x4f137a(0x180)](_0x4f137a(0x1c3));
function canvasSize() {
  const _0x29c97a = _0x4f137a;
  (canvas[_0x29c97a(0x147)] = window[_0x29c97a(0x1da)]),
    (canvas[_0x29c97a(0x19c)] = window[_0x29c97a(0x13c)]);
}
canvasSize();
const ctx = canvas[_0x4f137a(0x175)]('2d'),
  patternUI = document[_0x4f137a(0x180)](_0x4f137a(0x19d));
(patternUI['style']['top'] = window[_0x4f137a(0x13c)] + 'px'),
  (patternUI['dataset']['hidden'] = 0x1);
const rangeLabel = document[_0x4f137a(0x180)](_0x4f137a(0x193));
let shapeType = 0x0;
const scrollElem = document[_0x4f137a(0x139)](_0x4f137a(0x142));
scrollElem[_0x4f137a(0x1e2)] = 'SCROLL\x20▷';
function _0x3bc0(_0x3330da, _0x483efd) {
  const _0x3f9d28 = _0x3f9d();
  return (
    (_0x3bc0 = function (_0x3bc0a7, _0x73b6ed) {
      _0x3bc0a7 = _0x3bc0a7 - 0x135;
      let _0x1e54c2 = _0x3f9d28[_0x3bc0a7];
      return _0x1e54c2;
    }),
    _0x3bc0(_0x3330da, _0x483efd)
  );
}
function generateRainbowColors(
  _0x5288ef = 0x3,
  _0x9bcf66 = { r: 0xff, g: 0x0, b: 0x0 },
  _0x492c9a = !![]
) {
  const _0x11ab11 = _0x4f137a;
  let _0x31bb37 = 0xff,
    _0x3f39e1 = _0x31bb37 / (_0x5288ef - 0x1),
    _0x183bd7 = Object[_0x11ab11(0x169)](_0x9bcf66),
    _0x2b1480 = _0x183bd7[_0x11ab11(0x192)](_0x31bb37);
  !_0x492c9a && _0x183bd7[_0x11ab11(0x1c7)]();
  let _0x4c85fc =
      _0x2b1480 === 0x0 ? _0x183bd7[_0x11ab11(0x1b7)] - 0x1 : _0x2b1480 - 0x1,
    _0x1dacd8 =
      _0x2b1480 + 0x1 === _0x183bd7[_0x11ab11(0x1b7)] ? 0x0 : _0x2b1480 + 0x1,
    _0x38c102 = _0x183bd7[_0x4c85fc],
    _0x468e02 = _0x183bd7[_0x1dacd8];
  return (
    _0x38c102 === 0xff || _0x468e02 === 0xff
      ? _0x38c102 === 0xff
        ? (_0x183bd7[_0x4c85fc] -= _0x3f39e1)
        : (_0x183bd7[_0x2b1480] -= _0x3f39e1)
      : _0x38c102 > 0x0
      ? (_0x183bd7[_0x4c85fc] = Math[_0x11ab11(0x13e)](
          _0x38c102 - _0x3f39e1,
          0x0
        ))
      : (_0x183bd7[_0x1dacd8] = Math[_0x11ab11(0x1ae)](
          _0x468e02 + _0x3f39e1,
          _0x31bb37
        )),
    !_0x492c9a && _0x183bd7[_0x11ab11(0x1c7)](),
    ([_0x9bcf66['r'], _0x9bcf66['g'], _0x9bcf66['b']] = _0x183bd7),
    _0x9bcf66
  );
}
function rgbaString(_0x4a4323, _0x110a38 = 0.6) {
  const _0x6b5b2a = _0x4f137a;
  return (
    'rgba(' +
    Math[_0x6b5b2a(0x14c)](_0x4a4323['r']) +
    ',\x20' +
    Math[_0x6b5b2a(0x14c)](_0x4a4323['g']) +
    ',\x20' +
    Math[_0x6b5b2a(0x14c)](_0x4a4323['b']) +
    ',\x20' +
    _0x110a38 +
    ')'
  );
}
const blendMode = [
  _0x4f137a(0x1ca),
  _0x4f137a(0x137),
  _0x4f137a(0x1a8),
  'darken',
  _0x4f137a(0x1b2),
  _0x4f137a(0x144),
  'exclusion',
  _0x4f137a(0x189),
];
function cleanCanvas() {
  const _0x56af4e = _0x4f137a;
  (ctx[_0x56af4e(0x1e0)] = _0x56af4e(0x1ca)), (ctx[_0x56af4e(0x15d)] = 'white');
  const { width: _0x3d93fb, height: _0x38dd49 } = getCanvasDimensions();
  ctx[_0x56af4e(0x1e1)](0x0, 0x0, _0x3d93fb, _0x38dd49),
    (ctx['fillStyle'] = 'black');
}
function getCanvasDimensions() {
  const _0x3a56ce = _0x4f137a,
    _0x2beb10 = canvas[_0x3a56ce(0x166)],
    _0x10c083 = canvas[_0x3a56ce(0x184)];
  return { width: _0x2beb10, height: _0x10c083 };
}
const degToRad = _0x1ea6b7 => (_0x1ea6b7 * Math['PI']) / 0xb4;
function createTriangle(_0x324819, _0x52fe51, _0x268681) {
  const _0x138e69 = { x: 0x0, y: 0x0 },
    _0x1f6a52 = { x: _0x324819, y: 0x0 },
    _0x34f0e0 = { x: _0x324819, y: _0x52fe51 };
  return [_0x138e69, _0x1f6a52, _0x34f0e0];
}
function createRectangle(_0x2ed223, _0x3712c1, _0x3cd8f8) {
  const _0x2f9f20 = { x: 0x0, y: 0x0 },
    _0x1c812f = { x: _0x2ed223, y: 0x0 },
    _0x4efc90 = { x: _0x2ed223, y: _0x3712c1 },
    _0x1bf2a1 = { x: 0x0, y: _0x3712c1 };
  return [_0x2f9f20, _0x1c812f, _0x4efc90, _0x1bf2a1];
}
function createPolygon(_0x517612, _0x5073c2, _0x6fb73d) {
  const _0x5189af = _0x4f137a;
  _0x517612 = _0x517612 / (_0x6fb73d / 0x4);
  const _0x46335e = { x: 0x0, y: 0x0 },
    _0x317937 = [_0x46335e],
    _0x679669 = degToRad(0x168 / _0x6fb73d);
  for (let _0x2d37d0 = 0x1; _0x2d37d0 < _0x6fb73d; _0x2d37d0++) {
    const _0x424b43 = _0x2d37d0 * _0x679669,
      _0x263fbc =
        Math['cos'](_0x424b43) * _0x517612 +
        _0x317937[_0x317937[_0x5189af(0x1b7)] - 0x1]['x'],
      _0x789282 =
        Math[_0x5189af(0x1bc)](_0x424b43) * _0x517612 +
        _0x317937[_0x317937['length'] - 0x1]['y'];
    _0x317937[_0x5189af(0x1de)]({ x: _0x263fbc, y: _0x789282 });
  }
  return _0x317937;
}
function createCircle(_0x3633fc, _0x564dd9, _0x4f8f8d) {
  return createPolygon(_0x3633fc, null, 0x190);
}
const polygons = [createCircle, createCircle, createTriangle, createRectangle];
let previousColor,
  counter = 0x0;
function draw(_0xb7c4c5, _0x182959 = 0x3, _0xafcf4f, _0x2aae04) {
  const _0x3a987b = _0x4f137a;
  counter++,
    ctx[_0x3a987b(0x17c)](),
    _0xb7c4c5[_0x3a987b(0x1ce)](_0x3ffa1c => {
      const _0x3ae729 = _0x3a987b;
      ctx[_0x3ae729(0x1b4)](_0x3ffa1c['x'], _0x3ffa1c['y']);
    }),
    ctx[_0x3a987b(0x1d0)](),
    _0xafcf4f && ((ctx[_0x3a987b(0x1a0)] = _0xafcf4f), ctx[_0x3a987b(0x1bb)]()),
    (previousColor = generateRainbowColors(_0x182959, previousColor)),
    (ctx[_0x3a987b(0x15d)] = rgbaString(previousColor, _0x2aae04)),
    ctx[_0x3a987b(0x160)]();
}
function translatePoints(_0x491211, _0x5a0b30, _0x780395, _0x5ac918) {
  return (
    (_0x491211 = _0x491211['map'](_0x4f0d32 => {
      const _0x161006 = _0x4f0d32['x'] + _0x5a0b30,
        _0x39cdba = _0x4f0d32['y'] + _0x780395;
      return { x: _0x161006, y: _0x39cdba };
    })),
    _0x491211
  );
}
function rotatePoint(_0x34d883, _0x23ca4d) {
  const _0x4cc3f2 = _0x4f137a,
    _0x18e997 = Math[_0x4cc3f2(0x1bc)](degToRad(_0x23ca4d)),
    _0x2a35fd = Math[_0x4cc3f2(0x1c5)](degToRad(_0x23ca4d)),
    _0x3fe18c = _0x34d883['x'] * _0x2a35fd - _0x34d883['y'] * _0x18e997,
    _0x5ad605 = _0x34d883['x'] * _0x18e997 + _0x34d883['y'] * _0x2a35fd;
  return { x: _0x3fe18c, y: _0x5ad605 };
}
function rotatePoints(_0x18c121, _0x249a49) {
  const _0x22be82 = _0x4f137a,
    _0x51add6 = _0x18c121[_0x22be82(0x13b)](_0x45dd5a =>
      rotatePoint(_0x45dd5a, _0x249a49)
    );
  return _0x51add6;
}
function createPattern({
  shape: _0x119305,
  adj: _0x2266f1,
  opp: _0x2b7ccc,
  dx: _0x443ac1,
  dy: _0x29fd62,
  dpx: _0x4e9d42,
  dpy: _0x109211,
  angle: _0x4bd267,
  steps: _0x130368,
  stroke: _0x128aac,
  alpha: _0x5cd429,
  blend: _0x1f5803,
}) {
  const _0x3d8a6d = _0x4f137a;
  _0x5cd429 = _0x5cd429 / 0x64;
  const _0x16efe0 = _0x119305 < 0x5 ? polygons[_0x119305 - 0x1] : createPolygon;
  let _0x34efb4 = _0x16efe0(_0x2266f1, _0x2b7ccc, _0x119305);
  if (_0x4bd267) _0x34efb4 = rotatePoints(_0x34efb4, _0x4bd267);
  let _0x549879 = 0x0,
    _0x37bd49 = 0x0,
    _0x3d51f5 = 0x0,
    _0x3e8bfc = 0x0;
  const { width: _0x581462, height: _0x54fbc6 } = getCanvasDimensions();
  (previousColor = { r: 0xff, g: 0x0, b: 0x0 }),
    (ctx[_0x3d8a6d(0x1e0)] = blendMode[_0x1f5803]);
  while (!![]) {
    draw(
      translatePoints(_0x34efb4, _0x549879, _0x37bd49),
      _0x130368,
      _0x128aac,
      _0x5cd429
    );
    if (_0x549879 >= _0x581462 && _0x37bd49 >= _0x54fbc6) break;
    else {
      if (_0x549879 >= _0x581462) {
        _0x3d51f5++, (_0x549879 = 0x0);
        if (_0x3d51f5 % 0x2) _0x549879 += (_0x443ac1 * _0x4e9d42) / 0xa;
        _0x37bd49 += _0x29fd62;
      } else {
        if (_0x3e8bfc % 0x2) _0x37bd49 += (_0x29fd62 * _0x109211) / 0xa;
        else _0x37bd49 -= (_0x29fd62 * _0x109211) / 0xa;
        _0x3e8bfc++, (_0x549879 += _0x443ac1);
      }
    }
  }
}
function disableInput(_0x5c09b1, _0x57f468 = null) {
  const _0x12249b = _0x4f137a,
    _0x127229 = document[_0x12249b(0x180)](_0x12249b(0x18e));
  (_0x127229[_0x12249b(0x1c0)] = _0x57f468),
    (_0x127229[_0x12249b(0x1dd)] = !![]);
}
function enableInput(_0x1b9c31) {
  const _0x224eed = _0x4f137a,
    _0x688c2 = document[_0x224eed(0x180)](_0x224eed(0x18e));
  _0x688c2[_0x224eed(0x1dd)] = ![];
}
let timoutId,
  timeoutClean = !![];
function handleDraw(_0x4260c9) {
  timeoutClean &&
    ((timeoutClean = ![]),
    (timoutId = setTimeout(() => {
      const _0x48522b = _0x3bc0;
      handleHover(_0x4260c9), cleanCanvas();
      const _0x51f218 = getRangeOptions();
      if (
        _0x51f218[_0x48522b(0x1c2)] > 0x4 ||
        _0x51f218[_0x48522b(0x1c2)] < 0x3
      )
        disableInput(_0x48522b(0x141), _0x51f218[_0x48522b(0x17e)]);
      else enableInput(_0x48522b(0x141));
      createPattern(_0x51f218), (timeoutClean = !![]);
    }, 0x32)));
}
function elemPosDim(_0x321b2b) {
  const _0x50ea3b = _0x4f137a,
    _0x6e74b5 = Number(_0x321b2b[_0x50ea3b(0x165)]),
    _0x260cff = Number(_0x321b2b[_0x50ea3b(0x187)]),
    _0x3b7331 = Number(_0x321b2b[_0x50ea3b(0x166)]),
    _0x2dad23 = Number(_0x321b2b[_0x50ea3b(0x184)]);
  return {
    top: _0x6e74b5,
    left: _0x260cff,
    width: _0x3b7331,
    height: _0x2dad23,
  };
}
function handleHover(_0x4bb3b9) {
  const _0x1254a8 = _0x4f137a;
  rangeLabel[_0x1254a8(0x16d)][_0x1254a8(0x18c)] = 0x1;
  const {
    top: _0x5adab8,
    left: _0x416676,
    width: _0x199f6f,
    height: _0x4e4710,
  } = elemPosDim(_0x4bb3b9[_0x1254a8(0x1eb)]);
  rangeLabel[_0x1254a8(0x15c)] =
    _0x1254a8(0x17d) +
    _0x4bb3b9[_0x1254a8(0x1eb)][_0x1254a8(0x158)] +
    ':\x20' +
    _0x4bb3b9[_0x1254a8(0x1eb)][_0x1254a8(0x1c0)] +
    _0x1254a8(0x154) +
    _0x4bb3b9[_0x1254a8(0x1eb)][_0x1254a8(0x13a)][_0x1254a8(0x1d5)] +
    _0x1254a8(0x1b6);
}
function rangesToggleScroll() {
  const _0x15831f = _0x4f137a,
    _0xdbb52d = document['querySelector'](_0x15831f(0x145)),
    _0x2d0423 = _0xdbb52d[_0x15831f(0x180)]('span');
  _0xdbb52d[_0x15831f(0x1dc)] > _0xdbb52d[_0x15831f(0x184)]
    ? ((_0xdbb52d['style'][_0x15831f(0x18d)] = 'scroll'),
      _0x2d0423[_0x15831f(0x195)](_0x15831f(0x16d)))
    : ((_0xdbb52d[_0x15831f(0x16d)][_0x15831f(0x18d)] = _0x15831f(0x13f)),
      (_0x2d0423[_0x15831f(0x16d)][_0x15831f(0x14b)] = 'none'));
}
function handleResize(_0x16b9a0) {
  rangesToggleScroll(),
    canvasSize(),
    cleanCanvas(),
    createPattern(getRangeOptions()),
    handleMenuResize();
}
function downloadImage(_0xe988b5) {
  const _0xcfa54a = _0x4f137a,
    _0x3e8311 = document[_0xcfa54a(0x180)](_0xcfa54a(0x1c3)),
    _0x268a04 = document[_0xcfa54a(0x139)]('a');
  (_0x268a04[_0xcfa54a(0x151)] = _0x3e8311[_0xcfa54a(0x197)](
    _0xcfa54a(0x1a9),
    0x1
  )[_0xcfa54a(0x14a)]('image/png', _0xcfa54a(0x14e))),
    (_0x268a04['download'] = _0xcfa54a(0x173)),
    document['body'][_0xcfa54a(0x1e5)](_0x268a04),
    _0x268a04[_0xcfa54a(0x1e9)](),
    document[_0xcfa54a(0x170)][_0xcfa54a(0x1cf)](_0x268a04);
}
function createSherableURL(_0x5b3258) {
  const _0x142c81 = _0x4f137a,
    _0x226ef0 = window[_0x142c81(0x1d9)][_0x142c81(0x155)],
    _0x528d94 = window['location'][_0x142c81(0x198)],
    _0x2ca294 = Object['entries'](getRangeOptions())
      [_0x142c81(0x13b)](
        ([_0x31a810, _0x55c115]) => _0x31a810 + '=' + _0x55c115
      )
      [_0x142c81(0x1b1)]('&');
  return (
    console[_0x142c81(0x179)](_0x226ef0 + _0x528d94 + '?' + _0x2ca294),
    _0x226ef0 + _0x528d94 + '?' + _0x2ca294
  );
}
function copyToClipboard(_0x407623) {
  const _0x54327a = _0x4f137a,
    _0x54827 = [
      new ClipboardItem({
        'text/plain': new Blob([_0x407623], { type: 'text/plain' }),
      }),
      alert(_0x54327a(0x1d8)),
    ];
  navigator[_0x54327a(0x1ac)][_0x54327a(0x1bd)](_0x54827)[_0x54327a(0x14f)](
    function () {
      const _0x16191e = _0x54327a;
      console[_0x16191e(0x179)](_0x16191e(0x1a6));
    },
    function (_0x2630ee) {
      const _0x5cc3a9 = _0x54327a;
      console[_0x5cc3a9(0x181)](_0x2630ee, _0x5cc3a9(0x143));
    }
  );
}
function getQueryParamEntries() {
  const _0x1a5cf2 = _0x4f137a,
    _0xb679c1 = new URLSearchParams(window[_0x1a5cf2(0x1d9)][_0x1a5cf2(0x18a)]),
    _0x47fa4a = Object['fromEntries'](_0xb679c1);
  return (
    (queryParamEntries = Object[_0x1a5cf2(0x150)](_0x47fa4a)), queryParamEntries
  );
}
function toggleUIMenu() {
  const _0x3e28f8 = _0x4f137a;
  console[_0x3e28f8(0x179)](patternUI[_0x3e28f8(0x16d)][_0x3e28f8(0x176)]);
  const _0x12a2ac = patternUI[_0x3e28f8(0x13a)];
  Number(_0x12a2ac[_0x3e28f8(0x13f)])
    ? (patternUI[_0x3e28f8(0x16d)][_0x3e28f8(0x176)] =
        window['innerHeight'] - patternUI[_0x3e28f8(0x184)] + 'px')
    : (patternUI['style'][_0x3e28f8(0x176)] = window[_0x3e28f8(0x13c)] + 'px'),
    (_0x12a2ac[_0x3e28f8(0x13f)] = Number(_0x12a2ac[_0x3e28f8(0x13f)]) ^ 0x1);
}
function handleMenuResize() {
  const _0x5b4a55 = _0x4f137a;
  patternUI[_0x5b4a55(0x16e)][_0x5b4a55(0x1a7)](_0x5b4a55(0x194)),
    Number(patternUI[_0x5b4a55(0x13a)][_0x5b4a55(0x13f)])
      ? (patternUI['style'][_0x5b4a55(0x176)] = window['innerHeight'] + 'px')
      : (patternUI[_0x5b4a55(0x16d)][_0x5b4a55(0x176)] =
          window[_0x5b4a55(0x13c)] - patternUI[_0x5b4a55(0x184)] + 'px'),
    patternUI[_0x5b4a55(0x16e)][_0x5b4a55(0x1ab)](_0x5b4a55(0x194));
}
function toggleIconLogic(_0x136ac2) {
  const _0x3117dd = _0x4f137a,
    _0x321b60 = _0x136ac2[_0x3117dd(0x13a)][_0x3117dd(0x158)],
    _0x428e58 = Number(_0x136ac2[_0x3117dd(0x13a)][_0x3117dd(0x16f)]),
    _0x36f869 = document[_0x3117dd(0x19e)](_0x3117dd(0x1bf) + _0x321b60 + ']'),
    _0x1ec39d = Array[_0x3117dd(0x1b0)](_0x36f869)
      [_0x3117dd(0x19b)](
        _0x2c8ab9 =>
          Number(_0x2c8ab9[_0x3117dd(0x13a)][_0x3117dd(0x16f)]) != _0x428e58
      )
      ['pop'](),
    _0x429b72 = Number(_0x1ec39d['dataset'][_0x3117dd(0x16f)]);
  _0x136ac2[_0x3117dd(0x16e)][_0x3117dd(0x1ab)](_0x3117dd(0x13f)),
    _0x1ec39d[_0x3117dd(0x16e)][_0x3117dd(0x1a7)](_0x3117dd(0x13f));
}
function toggleIcon(_0x4599ee) {
  const _0xad7b62 = _0x4599ee['target'];
  toggleIconLogic(_0xad7b62);
}
function createRange({
  name: _0x48e240,
  min: _0x43d581,
  max: _0x34ea96,
  val: _0x3917bd,
  label: _0x3eb86e,
}) {
  const _0x23dd7b = _0x4f137a,
    _0x34f3a4 = document['createElement'](_0x23dd7b(0x153));
  (_0x34f3a4['type'] = 'range'),
    (_0x34f3a4[_0x23dd7b(0x1ae)] = _0x43d581),
    (_0x34f3a4[_0x23dd7b(0x13e)] = _0x34ea96),
    (_0x34f3a4[_0x23dd7b(0x158)] = _0x48e240),
    (_0x34f3a4[_0x23dd7b(0x140)] = _0x23dd7b(0x1df)),
    (_0x34f3a4[_0x23dd7b(0x13a)]['label'] = _0x3eb86e),
    (_0x34f3a4[_0x23dd7b(0x13a)][_0x23dd7b(0x1ad)] = _0x48e240);
  if (_0x3917bd !== undefined) _0x34f3a4[_0x23dd7b(0x1c0)] = _0x3917bd;
  return (
    _0x34f3a4['addEventListener'](_0x23dd7b(0x153), handleDraw),
    _0x34f3a4[_0x23dd7b(0x19f)](_0x23dd7b(0x1af), handleDraw),
    _0x34f3a4
  );
}
function createRanges() {
  const _0x335af6 = _0x4f137a,
    _0x16c2b2 = document[_0x335af6(0x180)](_0x335af6(0x145)),
    _0x3c43be = [
      {
        name: _0x335af6(0x1c2),
        min: 0x2,
        max: 0xa,
        val: 0x3,
        label: _0x335af6(0x191),
      },
      {
        name: _0x335af6(0x17e),
        min: 0x1,
        max: 0x12c,
        val: 0x32,
        label: _0x335af6(0x1d6),
      },
      { name: 'opp', min: 0x1, max: 0x12c, val: 0x32, label: _0x335af6(0x188) },
      {
        name: 'dx',
        min: 0xa,
        max: 0x258,
        val: 0x32,
        label: 'Horizontal\x20distance\x20between\x20shapes',
      },
      { name: 'dy', min: 0xa, max: 0x258, val: 0x32, label: _0x335af6(0x1e8) },
      {
        name: 'dpx',
        min: -0xa,
        max: 0xa,
        val: 0x0,
        label:
          'Horizontal\x20dephase,\x20shift\x20even\x20rows\x20left\x20or\x20right',
      },
      { name: 'dpy', min: -0xa, max: 0xa, val: 0x0, label: _0x335af6(0x18f) },
      {
        name: _0x335af6(0x138),
        min: 0x0,
        max: 0x2d0,
        val: 0x0,
        label: _0x335af6(0x15b),
      },
      {
        name: _0x335af6(0x1b8),
        min: 0x2,
        max: 0x12c,
        val: 0x3,
        label: _0x335af6(0x168),
      },
      {
        name: 'stroke',
        min: 0x0,
        max: 0x14,
        val: 0x1,
        label: _0x335af6(0x1cc),
      },
      {
        name: _0x335af6(0x152),
        min: 0x0,
        max: 0x64,
        val: 0x3c,
        label: _0x335af6(0x1d3),
      },
      {
        name: _0x335af6(0x149),
        min: 0x0,
        max: blendMode[_0x335af6(0x1b7)] - 0x1,
        val: 0x0,
        label: 'Blending\x20mode\x20for\x20the\x20shapes.',
      },
    ];
  _0x3c43be[_0x335af6(0x1ce)](_0x3c608a =>
    _0x16c2b2[_0x335af6(0x1e5)](createRange(_0x3c608a))
  ),
    _0x16c2b2[_0x335af6(0x1e5)](scrollElem[_0x335af6(0x1b3)](!![]));
}
function getRangeOptions() {
  const _0xfff8a6 = _0x4f137a,
    _0x49d8f5 = document[_0xfff8a6(0x180)]('.ranges');
  return Array['from'](_0x49d8f5['children'])
    [_0xfff8a6(0x19b)](_0x13a6a4 => _0x13a6a4['type'] === 'range')
    [_0xfff8a6(0x13b)](_0x24c0f2 => ({
      [_0x24c0f2[_0xfff8a6(0x158)]]: Number(_0x24c0f2[_0xfff8a6(0x1c0)]),
    }))
    ['reduce']((_0x1cecf0, _0x510b06) => ({ ..._0x1cecf0, ..._0x510b06 }));
}
function setRangeOptions(_0x3e8748) {
  const _0x10fd3a = _0x4f137a;
  for (let [_0x42464c, _0x5c021c] of _0x3e8748) {
    const _0x4a425b = document[_0x10fd3a(0x180)](
      _0x10fd3a(0x162) + _0x42464c + '\x27]'
    );
    if (_0x4a425b) _0x4a425b['value'] = _0x5c021c;
  }
}
function cleanQueryParms() {
  const _0x2aba77 = _0x4f137a;
  window[_0x2aba77(0x16b)]['replaceState'](
    {},
    document[_0x2aba77(0x1be)],
    window[_0x2aba77(0x1d9)][_0x2aba77(0x155)] +
      window[_0x2aba77(0x1d9)][_0x2aba77(0x198)]
  );
}
const frames = Array(0x78)[_0x4f137a(0x160)](null),
  bgs = { 0x0: '#000', 0x1: '#FFF' };
let reel = [];
const avoid = [_0x4f137a(0x149), _0x4f137a(0x1c2)];
let animationPlaying = ![],
  bounce = ![],
  currentFrame = 0x0,
  litFrame = 0x0,
  strip;
function convertToParamEntries(_0x4f2e8e) {
  const _0x301a27 = _0x4f137a;
  return Object[_0x301a27(0x150)](_0x4f2e8e);
}
function toggleFrame(_0x3ef0cf) {
  const _0x45f5dc = _0x4f137a,
    _0xa2f840 = _0x3ef0cf['dataset'];
  (_0xa2f840[_0x45f5dc(0x159)] = Number(_0xa2f840[_0x45f5dc(0x159)]) ^ 0x1),
    (_0x3ef0cf[_0x45f5dc(0x16d)][_0x45f5dc(0x1cb)] =
      bgs[_0xa2f840[_0x45f5dc(0x159)]]),
    _0xa2f840[_0x45f5dc(0x159)] == 0x1
      ? (frames[_0xa2f840[_0x45f5dc(0x163)]] = getRangeOptions())
      : (frames[_0xa2f840['num']] = null);
}
function handleFrameClick(_0x25f873) {
  toggleFrame(_0x25f873['target']);
}
function emptyReel() {
  reel = [];
}
function calcIncrements(_0x1e33ec, _0x5c70d1, _0x1d6a69) {
  const _0x5e77c6 = _0x4f137a,
    _0x13cdd9 = Object[_0x5e77c6(0x171)](_0x1e33ec);
  return _0x13cdd9[_0x5e77c6(0x156)]((_0x257f87, _0x2d5499) => {
    const _0x24a069 = _0x5e77c6,
      _0x4d95f6 = avoid[_0x24a069(0x15a)](_0x2d5499)
        ? 0x0
        : (_0x5c70d1[_0x2d5499] - _0x1e33ec[_0x2d5499]) / _0x1d6a69,
      _0x1e0ecb = { [_0x2d5499]: _0x4d95f6 };
    return { ..._0x257f87, ..._0x1e0ecb };
  }, {});
}
function frameIncrement(_0x598afa, _0x319290) {
  const _0x2a0865 = _0x4f137a,
    _0x526123 = Object[_0x2a0865(0x171)](_0x598afa);
  return _0x526123[_0x2a0865(0x156)]((_0x2cec16, _0x1a79ab) => {
    const _0x52e2c0 = _0x2a0865,
      _0x221b26 = avoid[_0x52e2c0(0x15a)](_0x1a79ab)
        ? _0x598afa[_0x1a79ab]
        : _0x598afa[_0x1a79ab] + _0x319290[_0x1a79ab],
      _0xac864b = { [_0x1a79ab]: _0x221b26 };
    return { ..._0x2cec16, ..._0xac864b };
  }, {});
}
function calcTweenTransition(_0x32f3e8, _0x149135) {
  const _0x586c67 = _0x4f137a,
    _0x5294af = _0x149135 - _0x32f3e8;
  reel[_0x32f3e8] = frames[_0x32f3e8];
  const _0x343a07 = calcIncrements(
    frames[_0x32f3e8],
    frames[_0x149135],
    _0x5294af
  );
  console[_0x586c67(0x179)](_0x343a07);
  for (let _0x190e19 = 0x1; _0x190e19 < _0x5294af; _0x190e19++) {
    reel[_0x32f3e8 + _0x190e19] = frameIncrement(
      reel[_0x32f3e8 + _0x190e19 - 0x1],
      _0x343a07
    );
  }
}
function handleTweenStart(_0x2bb813) {
  if (_0x2bb813 > 0x0) {
    const _0x476ac4 = frames[_0x2bb813];
    console['log']('first\x20frame\x20is', _0x2bb813);
    for (let _0x49daaa = 0x0; _0x49daaa < _0x2bb813; _0x49daaa++) {
      reel[_0x49daaa] = _0x476ac4;
    }
  }
}
function handleTweenEnd(_0x148c66) {
  const _0x1c3526 = _0x4f137a,
    _0x1cef97 = frames[_0x148c66];
  reel[_0x148c66] = _0x1cef97;
  const _0x593d6b = frames[_0x1c3526(0x1b7)] - 0x1;
  if (_0x148c66 < _0x593d6b) {
    const _0x4cabd9 = _0x593d6b - _0x148c66;
    Array(_0x4cabd9)
      [_0x1c3526(0x160)](_0x1cef97)
      [_0x1c3526(0x1ce)](_0x52afab => reel['push'](_0x52afab));
  }
}
function getActiveFrames() {
  const _0x5ec7c1 = _0x4f137a;
  return frames[_0x5ec7c1(0x156)](
    (_0x38482c, _0x23f1a4, _0x515038) =>
      _0x38482c[_0x5ec7c1(0x16a)](_0x23f1a4 ? _0x515038 : []),
    []
  );
}
function createTweens() {
  const _0x3fca52 = _0x4f137a;
  emptyReel();
  const _0x2a53f9 = getActiveFrames();
  handleTweenStart(_0x2a53f9[0x0]);
  for (
    let _0x46ccc3 = 0x0;
    _0x46ccc3 < _0x2a53f9[_0x3fca52(0x1b7)] - 0x1;
    _0x46ccc3++
  ) {
    calcTweenTransition(_0x2a53f9[_0x46ccc3], _0x2a53f9[_0x46ccc3 + 0x1]);
  }
  handleTweenEnd(_0x2a53f9[_0x3fca52(0x1c9)](-0x1));
}
function animateFrame(_0x144de1) {
  cleanCanvas(),
    setRangeOptions(convertToParamEntries(_0x144de1)),
    createPattern(getRangeOptions());
}
function playAnimation(_0x2f2332) {
  const _0x1c1f8e = _0x4f137a;
  animationPlaying
    ? ((currentFrame =
        currentFrame == reel[_0x1c1f8e(0x1b7)] - 0x1
          ? 0x0
          : currentFrame + 0x1),
      highlightFrame(currentFrame),
      animateFrame(reel[currentFrame]),
      window['requestAnimationFrame'](playAnimation))
    : createPattern(getRangeOptions());
}
function togglePlayIconRemotely() {
  const _0xa6a0fd = _0x4f137a,
    _0x39a1dc = document[_0xa6a0fd(0x1ea)](_0xa6a0fd(0x14d));
  if (!_0x39a1dc[_0xa6a0fd(0x16e)]['contains'](_0xa6a0fd(0x13f)))
    toggleIconLogic(_0x39a1dc);
}
function toggleStopIcon() {
  const _0x540dda = _0x4f137a;
  toggleIconLogic(document[_0x540dda(0x1ea)](_0x540dda(0x1cd)));
}
function handlePlay() {
  const _0x38c29 = _0x4f137a;
  !animationPlaying &&
    (getActiveFrames()[_0x38c29(0x1b7)]
      ? (createTweens(),
        (animationPlaying = !![]),
        window['requestAnimationFrame'](playAnimation),
        togglePlayIconRemotely())
      : (setTimeout(toggleStopIcon, 0x64), alert(_0x38c29(0x1b9))));
}
function handleStop() {
  (animationPlaying = ![]), toggleStopIcon();
}
function handleReset() {
  const _0x2c09ca = _0x4f137a;
  handleStop(), emptyReel();
  const _0x2a56d0 = getActiveFrames();
  _0x2a56d0[_0x2c09ca(0x1ce)](_0x52680d =>
    toggleFrame(strip[_0x2c09ca(0x13d)][_0x52680d])
  ),
    frames[_0x2c09ca(0x1ce)](
      (_0x1d0773, _0x3a044a) => (frames[_0x3a044a] = null)
    ),
    cleanCanvas(),
    setRangeOptions(convertToParamEntries(resetFrame)),
    createPattern(getRangeOptions());
}
function highlightFrame(_0xf7d37d) {
  const _0x37f1e1 = _0x4f137a;
  if (litFrame) litFrame[_0x37f1e1(0x16d)]['backgroundImage'] = null;
  const _0x2fd39a = strip[_0x37f1e1(0x13d)][_0xf7d37d];
  (_0x2fd39a['style'][_0x37f1e1(0x15e)] = _0x37f1e1(0x1e6)),
    (litFrame = _0x2fd39a);
}
function handleFrameFitting() {
  const _0x378836 = _0x4f137a,
    _0x22f238 = document['querySelector'](_0x378836(0x148)),
    _0x360340 = _0x22f238[_0x378836(0x13a)],
    _0x24018c = strip['querySelector'](_0x378836(0x142));
  Number(_0x360340['fitted'])
    ? (strip[_0x378836(0x16e)]['remove'](_0x378836(0x1d2)),
      _0x22f238[_0x378836(0x16e)]['remove'](_0x378836(0x15f)),
      _0x24018c[_0x378836(0x16e)][_0x378836(0x1a7)]('hidden'))
    : (strip[_0x378836(0x16e)][_0x378836(0x1ab)](_0x378836(0x1d2)),
      _0x22f238[_0x378836(0x16e)][_0x378836(0x1ab)]('active-light'),
      _0x24018c[_0x378836(0x16e)][_0x378836(0x1ab)](_0x378836(0x13f))),
    (_0x360340[_0x378836(0x1a1)] = Number(_0x360340['fitted']) ^ 0x1);
}
function horizontalScroll(_0x5a3f4d) {
  const _0x552a5a = _0x4f137a;
  _0x5a3f4d[_0x552a5a(0x18b)](),
    (this[_0x552a5a(0x146)] += _0x5a3f4d[_0x552a5a(0x1c1)]);
}
function toggleMenuTransparency() {
  const _0x164ab1 = _0x4f137a;
  patternUI[_0x164ab1(0x16e)][_0x164ab1(0x164)](_0x164ab1(0x1e3))
    ? patternUI[_0x164ab1(0x16e)][_0x164ab1(0x1a7)](_0x164ab1(0x1e3))
    : patternUI[_0x164ab1(0x16e)]['add'](_0x164ab1(0x1e3));
}
const encodingConstants = {
    0x0: 'shape',
    0x1: 'adj',
    0x2: _0x4f137a(0x141),
    0x3: 'dx',
    0x4: 'dy',
    0x5: _0x4f137a(0x157),
    0x6: _0x4f137a(0x183),
    0x7: 'angle',
    0x8: _0x4f137a(0x1b8),
    0x9: _0x4f137a(0x1bb),
    0xa: _0x4f137a(0x152),
    0xb: 'blend',
  },
  encodingMap =
    '<=>^_{|}~¢£¤¥¦§¨©ª«¬®¯°±²³µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸˀˁ˂˃˄˅ˆˇˈˉˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭˯˰˱˲˳ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ΢ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧ';
function reverseMapEncodingConstants() {
  const _0x5b280d = _0x4f137a;
  return Object[_0x5b280d(0x1a5)](
    Object['entries'](encodingConstants)[_0x5b280d(0x13b)](
      ([_0x27cb0d, _0x513d45]) => [_0x513d45, Number(_0x27cb0d)]
    )
  );
}
function consecutiveKeys(_0x34abb9) {
  const _0x1379c2 = _0x4f137a;
  return _0x34abb9['slice'](0x0, _0x34abb9[_0x1379c2(0x1b7)] - 0x1)
    [_0x1379c2(0x13b)](
      (_0x3bf5a8, _0x5200ad) => !(_0x3bf5a8 - _0x34abb9[_0x5200ad + 0x1] + 0x1)
    )
    [_0x1379c2(0x161)](_0x30d2aa => _0x30d2aa);
}
function turnKeysToEncodingConstantVal(_0x460753) {
  const _0x11f4ab = _0x4f137a,
    _0x2d30b0 = reverseMapEncodingConstants(),
    _0x22d566 = Object[_0x11f4ab(0x171)](_0x460753)[_0x11f4ab(0x13b)](
      _0x8b910b => _0x2d30b0[_0x8b910b]
    );
  if (consecutiveKeys(_0x22d566)) return _0x22d566[_0x11f4ab(0x1b7)];
  return _0x22d566[_0x11f4ab(0x13b)](_0x3f2e9a => _0x2d30b0[_0x3f2e9a] + 0x41)
    [_0x11f4ab(0x13b)](_0x239d58 => String['fromCharCode'](_0x239d58))
    ['join']('');
}
function breakAngleVal(_0xfbbb21) {
  const _0x1d9009 = _0x4f137a;
  return _0xfbbb21[_0x1d9009(0x1c9)]()[_0x1d9009(0x13b)](_0x25ebe7 => {
    const _0x4bf9a7 = _0x1d9009;
    let _0x1c3829 = { ..._0x25ebe7 };
    const _0xd1d46b = _0x1c3829[_0x4bf9a7(0x138)];
    return (
      (_0x1c3829[_0x4bf9a7(0x1e7)] =
        _0xd1d46b > 0x168 ? _0xd1d46b - 0x168 : 0x0),
      (_0x1c3829['angle'] = _0xd1d46b <= 0x168 ? _0xd1d46b : 0x168),
      _0x1c3829
    );
  });
}
function appendFrameNum(_0x8d19e, _0x551f9b) {
  return _0x8d19e['slice']()['map']((_0x2b58d6, _0x75dd8f) => {
    return (_0x2b58d6['frame'] = _0x551f9b[_0x75dd8f]), _0x2b58d6;
  });
}
const lrs = _0x4a3e8e =>
  [..._0x4a3e8e[_0x4f137a(0x17f)](/(?=(.+)(?=.*\1))./g)]
    ['map'](([_0xa431e7, _0x54155a]) => _0x54155a)
    [_0x4f137a(0x19b)](
      (_0x83db79, _0x12b1cb, _0x514f2a) =>
        !_0x514f2a[_0x4f137a(0x167)](
          _0x3a8a24 => _0x83db79[_0x4f137a(0x1b7)] < _0x3a8a24['length']
        )
    );
function encodeFramesData() {
  const _0x17dc76 = _0x4f137a;
  if (frames['length']) {
    const _0x2dfd6c = 'Z';
    let _0x138945 = frames[_0x17dc76(0x19b)](_0x241cc2 => _0x241cc2),
      _0xc5f070 = frames[_0x17dc76(0x13b)]((_0x7b04d1, _0x2da978) => {
        if (_0x7b04d1) return _0x2da978;
      })[_0x17dc76(0x19b)](_0x55f096 => _0x55f096 !== undefined);
    const _0x3ae33e = turnKeysToEncodingConstantVal(_0x138945[0x0]),
      _0x560803 = Object[_0x17dc76(0x171)](_0x138945[0x0])[_0x17dc76(0x1b7)];
    (_0x138945 = breakAngleVal(_0x138945)),
      (_0x138945 = appendFrameNum(_0x138945, _0xc5f070));
    const _0x1072cb = _0x138945['map'](_0x54754c =>
      Object[_0x17dc76(0x169)](_0x54754c)
        [_0x17dc76(0x13b)](_0xc71092 =>
          String['fromCharCode'](_0xc71092 + 0xaf)
        )
        ['join']('')
    )[_0x17dc76(0x1b1)]('');
    return _0x3ae33e + _0x2dfd6c + _0x1072cb;
  } else console[_0x17dc76(0x179)](_0x17dc76(0x1b5));
}
function getSubarrays(_0x23f6b5, _0x652320) {
  const _0x1f5e0b = _0x4f137a;
  let _0x42e9a6 = 0x0,
    _0x2eeacc = _0x652320;
  result = [];
  while (_0x42e9a6 < _0x23f6b5[_0x1f5e0b(0x1b7)]) {
    result[_0x1f5e0b(0x1de)](_0x23f6b5[_0x1f5e0b(0x1c9)](_0x42e9a6, _0x2eeacc)),
      (_0x42e9a6 += _0x652320),
      (_0x2eeacc += _0x652320);
  }
  return result;
}
function restoreFrameObjects(_0x3e0d22, _0x59acd5) {
  const _0x5ed0e4 = _0x4f137a;
  return _0x3e0d22[_0x5ed0e4(0x13b)](_0x4e09b9 =>
    _0x4e09b9[_0x5ed0e4(0x13b)]((_0x93fc79, _0x4237c1) => [
      _0x59acd5[_0x4237c1],
      _0x93fc79,
    ])
  )[_0x5ed0e4(0x13b)](_0x51a86c => Object['fromEntries'](_0x51a86c));
}
function decodeFrameData(_0x577e83) {
  const _0x190d49 = _0x4f137a,
    _0x3dc328 = 'Z',
    [_0xf46d3, _0x8e36dc] = _0x577e83['split'](_0x3dc328);
  if (Number[_0x190d49(0x199)](Number(_0xf46d3))) {
    const _0x4210dd = Number(_0xf46d3),
      _0x3a2cf1 = Object['values'](encodingConstants)
        [_0x190d49(0x1c9)](0x0, _0x4210dd)
        [_0x190d49(0x16a)](_0x190d49(0x1e7)),
      _0x468768 = getSubarrays(_0x8e36dc, _0x4210dd + 0x2),
      _0x53a49e = _0x468768[_0x190d49(0x13b)](_0x57fe06 =>
        _0x57fe06['split']('')['map'](_0x163593 =>
          _0x163593[_0x190d49(0x185)]()
            ? _0x163593[_0x190d49(0x185)]() - 0xaf
            : 0x0
        )
      ),
      _0x2b5ebc = [];
    _0x53a49e[_0x190d49(0x1ce)](_0x35c620 => {
      const _0x55f561 = _0x190d49,
        _0x1ddb69 = _0x35c620[_0x55f561(0x1e4)]();
      _0x2b5ebc[_0x55f561(0x1de)](_0x1ddb69);
    });
    const _0x307a00 = restoreFrameObjects(_0x53a49e, _0x3a2cf1);
    return (
      _0x53a49e[_0x190d49(0x13b)](_0x4b0e34 => {
        const _0x12ef68 = _0x190d49;
        _0x4b0e34['angle'] += _0x4b0e34[_0x12ef68(0x1e7)];
        const { angle2: _0x340c01, ..._0x207571 } = _0x4b0e34;
        return _0x4b0e34;
      }),
      console[_0x190d49(0x179)](
        _0x307a00[_0x190d49(0x13b)](_0x752384 =>
          Object[_0x190d49(0x171)](_0x752384)
        )
      ),
      [_0x307a00, _0x2b5ebc]
    );
  } else {
  }
}
function _0x3f9d() {
  const _0x531b4c = [
    '3gHVxVv',
    'getContext',
    'top',
    '<i\x20class=\x22fas\x20fa-stop\x22></i>',
    '204XlMdpD',
    'log',
    '951348ywUsbb',
    'div',
    'beginPath',
    '<h2>',
    'adj',
    'matchAll',
    'querySelector',
    'error',
    'animation=',
    'dpy',
    'clientHeight',
    'charCodeAt',
    '1039563pBFeAl',
    'offsetLeft',
    'Opposite\x20side,\x20available\x20for\x20triangles\x20and\x20rectangles\x20only.',
    'luminosity',
    'search',
    'preventDefault',
    'opacity',
    'overflowY',
    'input[name=\x27opp\x27]',
    'Vertical\x20dephase,\x20shift\x20even\x20columns\x20up\x20or\x20down',
    '6833250XVkLbm',
    'Type\x20of\x20shape\x20by\x20number\x20of\x20angles(ish),\x202\x20is\x20circle,\x203\x20triangle,\x204\x20rectangle...',
    'indexOf',
    '.range-label',
    'ui-transition',
    'removeAttribute',
    '90uiPdku',
    'toDataURL',
    'pathname',
    'isInteger',
    '4138704izzBZU',
    'filter',
    'height',
    '#pattern_ui',
    'querySelectorAll',
    'addEventListener',
    'lineWidth',
    'fitted',
    '496925ecHBOG',
    'animation',
    '2208362EQBYab',
    'fromEntries',
    'Copied\x20to\x20clipboard\x20successfully!',
    'remove',
    'multiply',
    'image/png',
    '[data-rep]',
    'add',
    'clipboard',
    'tag',
    'min',
    'change',
    'from',
    'join',
    'hard-light',
    'cloneNode',
    'lineTo',
    'No\x20frames\x20to\x20encode',
    '</marquee>',
    'length',
    'steps',
    'Need\x20at\x20least\x20two\x20frames\x20to\x20create\x20animation.',
    '1156558CGGXjB',
    'stroke',
    'sin',
    'write',
    'title',
    '[data-name=',
    'value',
    'deltaY',
    'shape',
    'canvas',
    'scroll',
    'cos',
    'onclick',
    'reverse',
    'Need\x20at\x20least\x20one\x20animation\x20frame',
    'slice',
    'source-over',
    'backgroundColor',
    'The\x20width\x20of\x20the\x20border\x20(stroke)\x20size\x20❘❙❚',
    'stop-icon',
    'forEach',
    'removeChild',
    'closePath',
    'animation-share',
    'fit_frames',
    'Tranparency\x20of\x20the\x20fill\x20color\x20of\x20the\x20shape.',
    'this\x20is\x20encoded\x20str',
    'label',
    'Adjacent\x20side\x20or\x20only\x20side,\x20depending\x20on\x20polygon\x20type.\x20Dictates\x20the\x20shape\x20size.',
    '4EqoRvE',
    'Link\x20copied\x20to\x20clipboard.\x20Paste\x20anywhere\x20to\x20share\x20your\x20design.',
    'location',
    'innerWidth',
    '28RMSaSY',
    'scrollHeight',
    'disabled',
    'push',
    'range',
    'globalCompositeOperation',
    'fillRect',
    'innerText',
    'no-background-image',
    'pop',
    'appendChild',
    'linear-gradient(45deg,\x20red,\x20purple)',
    'angle2',
    'Vertical\x20distance\x20between\x20shapes',
    'click',
    'getElementById',
    'target',
    'button',
    'strip',
    'xor',
    'angle',
    'createElement',
    'dataset',
    'map',
    'innerHeight',
    'children',
    'max',
    'hidden',
    'className',
    'opp',
    'span',
    'Unable\x20to\x20write\x20to\x20clipboard.\x20:-(',
    'difference',
    '.ranges',
    'scrollLeft',
    'width',
    '.animation-title\x20span',
    'blend',
    'replace',
    'display',
    'floor',
    'play-icon',
    'image/octet-stream',
    'then',
    'entries',
    'href',
    'alpha',
    'input',
    '</h2><marquee\x20behavior=\x22scroll\x22\x20direction=\x22left\x22\x20loop=1>',
    'origin',
    'reduce',
    'dpx',
    'name',
    'active',
    'includes',
    'Angle\x20of\x20rotation',
    'innerHTML',
    'fillStyle',
    'backgroundImage',
    'active-light',
    'fill',
    'every',
    'input[name=\x27',
    'num',
    'contains',
    'offsetTop',
    'clientWidth',
    'some',
    'How\x20many\x20steps\x20between\x20colors.\x20More\x20steps\x20mean\x20slower\x20color\x20transitions.',
    'values',
    'concat',
    'history',
    'reset',
    'style',
    'classList',
    'rep',
    'body',
    'keys',
    'frame',
    'pattern--patricio.work.png',
  ];
  _0x3f9d = function () {
    return _0x531b4c;
  };
  return _0x3f9d();
}
function restoreFramesFromEncodedData(_0x2728da) {
  const _0xb5c367 = _0x4f137a,
    [_0x170041, _0x4bd870] = decodeFrameData(_0x2728da),
    _0x1c3b5a = strip['children'][_0xb5c367(0x1b7)];
  _0x4bd870[_0xb5c367(0x1ce)]((_0x18fbde, _0x87beab) => {
    const _0x324a23 = _0xb5c367;
    if (_0x18fbde > _0x1c3b5a) _0x18fbde = 0x0;
    setRangeOptions(Object[_0x324a23(0x150)](_0x170041[_0x87beab])),
      strip['children'][_0x18fbde][_0x324a23(0x1e9)]();
  }),
    handlePlay();
}
function createAnimationSherableURL(_0x24e932) {
  const _0x469fa3 = _0x4f137a,
    _0x51ea2e = window[_0x469fa3(0x1d9)][_0x469fa3(0x155)],
    _0x2492b6 = window[_0x469fa3(0x1d9)][_0x469fa3(0x198)],
    _0x368fda = encodeFramesData(),
    _0x58786 = _0x51ea2e + _0x2492b6 + '?' + (_0x469fa3(0x182) + _0x368fda);
  return console[_0x469fa3(0x179)](_0x58786), _0x58786;
}
function copyAnimationToClipboard() {
  const _0x33d833 = _0x4f137a,
    _0x298b0b = frames[_0x33d833(0x19b)](_0x8331a2 => _0x8331a2);
  console[_0x33d833(0x179)](_0x298b0b),
    _0x298b0b[_0x33d833(0x1b7)]
      ? copyToClipboard(createAnimationSherableURL())
      : alert(_0x33d833(0x1c8));
}
const animation = document['createElement'](_0x4f137a(0x17b));
(animation['id'] = 'animation-panel'),
  (strip = document[_0x4f137a(0x139)](_0x4f137a(0x17b))),
  (strip['id'] = _0x4f137a(0x136)),
  (strip[_0x4f137a(0x140)] = _0x4f137a(0x1c4)),
  strip['addEventListener']('wheel', horizontalScroll),
  animation[_0x4f137a(0x1e5)](strip);
const frame = document[_0x4f137a(0x139)](_0x4f137a(0x17b));
(frame[_0x4f137a(0x140)] = _0x4f137a(0x172)),
  (frame[_0x4f137a(0x13a)][_0x4f137a(0x159)] = 0x0),
  (frame['style']['bacgroundColor'] =
    bgs[Number(frame[_0x4f137a(0x13a)][_0x4f137a(0x159)])]),
  frames[_0x4f137a(0x1ce)]((_0x1f9ebb, _0x16a2c4) => {
    const _0x2fa7cd = _0x4f137a;
    (frameClone = frame[_0x2fa7cd(0x1b3)]()),
      (frameClone[_0x2fa7cd(0x13a)][_0x2fa7cd(0x163)] = _0x16a2c4),
      (frameClone[_0x2fa7cd(0x1c6)] = _0xd97fde => handleFrameClick(_0xd97fde)),
      strip[_0x2fa7cd(0x1e5)](frameClone);
  }),
  strip[_0x4f137a(0x1e5)](scrollElem['cloneNode'](!![]));
const button = document['createElement'](_0x4f137a(0x135)),
  buttonsFooter = document[_0x4f137a(0x139)]('div');
(buttonsFooter[_0x4f137a(0x140)] = 'buttons'),
  animation[_0x4f137a(0x1e5)](buttonsFooter);
const play = button[_0x4f137a(0x1b3)](),
  stop = button[_0x4f137a(0x1b3)](),
  reset = button[_0x4f137a(0x1b3)]();
(play[_0x4f137a(0x15c)] = '<i\x20class=\x22fas\x20fa-play\x22></i>'),
  (play[_0x4f137a(0x1c6)] = _0x46331c => handlePlay(_0x46331c)),
  (stop[_0x4f137a(0x15c)] = _0x4f137a(0x177)),
  (stop[_0x4f137a(0x1c6)] = _0x16b729 => handleStop(_0x16b729)),
  (reset[_0x4f137a(0x1e2)] = _0x4f137a(0x16c)),
  (reset[_0x4f137a(0x1c6)] = _0x16e90d => handleReset(_0x16e90d)),
  buttonsFooter[_0x4f137a(0x1e5)](play),
  buttonsFooter['appendChild'](stop),
  buttonsFooter['appendChild'](reset),
  patternUI[_0x4f137a(0x1e5)](animation);
function appendAnimationButton() {
  const _0x36bb62 = _0x4f137a,
    _0x4b60e8 = document['getElementById'](_0x36bb62(0x1d1));
  buttonsFooter[_0x36bb62(0x1e5)](_0x4b60e8);
}
function loadEventListeners() {
  const _0x294f6f = _0x4f137a;
  Array[_0x294f6f(0x1b0)](document[_0x294f6f(0x19e)](_0x294f6f(0x1aa)))[
    'forEach'
  ](_0xb4d20b => {
    const _0x4cd925 = _0x294f6f;
    _0xb4d20b[_0x4cd925(0x19f)](_0x4cd925(0x1e9), toggleIcon);
  });
}
window['onload'] = () => {
  const _0x325932 = _0x4f137a;
  appendAnimationButton(),
    loadEventListeners(),
    createRanges(),
    cleanCanvas(),
    window[_0x325932(0x19f)]('resize', handleResize),
    (queryParamOptions = getQueryParamEntries()),
    rangesToggleScroll(),
    toggleUIMenu();
  if (queryParamOptions['length']) {
    let _0x404a45;
    queryParamOptions[_0x325932(0x1ce)](_0x5e2be9 => {
      const _0x1e2e4d = _0x325932,
        [_0x571616, _0x1d6cf0] = _0x5e2be9;
      if (_0x571616 === _0x1e2e4d(0x1a3)) _0x404a45 = _0x1d6cf0;
    }),
      console[_0x325932(0x179)](_0x325932(0x1d4), _0x404a45),
      _0x404a45
        ? (console[_0x325932(0x179)](_0x404a45),
          restoreFramesFromEncodedData(_0x404a45))
        : (setRangeOptions(queryParamEntries), cleanQueryParms());
  }
  (resetFrame = getRangeOptions()), createPattern(resetFrame);
};
