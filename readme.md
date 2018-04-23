# parse-poly [![experimental](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://travis-ci.org/dy/parse-poly.png)](https://travis-ci.org/dy/parse-poly)

Take in any polygon or polyline argument and return array of coordinates. The returned array is always a copy of initial argument.

[![npm install parse-poly](https://nodei.co/npm/parse-poly.png?mini=true)](https://npmjs.org/package/parse-poly/)

```js
const parsePoly = require('parse-poly')

// [[10, 20], [30, 40], [50, 60]]
parsePoly('10 20 30 40 50 60')
parsePoly(10, 20, 30, 40, 50, 60)
parsePoly([10, 20, 30, 40, 50, 60])
parsePoly([10, 20], [30, 40], [50, 60])
parsePoly([[10, 20], [30, 40], [50, 60]])
parsePoly(new Float32Array([10, 20, 30, 40, 50, 60]))
parsePoly([new Float32Array([10, 20]), new Float32Array([30, 40]), new Float32Array([50, 60])])
parsePoly([{x: 10, y: 20}, {x: 30, y: 40}, {x: 50, y: 60}])
parsePoly({
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [[10, 20], [30, 40], [50, 60]]
  }
})
```

## License

(c) 2018 Dmitry Yv. MIT License
