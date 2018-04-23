'use strict'

const parsePoly = require('./')
const a = require('assert')

var result = [[10, 20], [30, 40], [50, 60]]

a.deepEqual(parsePoly('10 20 30 40 50 60'), result)
a.deepEqual(parsePoly(10, 20, 30, 40, 50, 60), result)
a.deepEqual(parsePoly([10, 20, 30, 40, 50, 60]), result)
a.deepEqual(parsePoly([10, 20], [30, 40], [50, 60]), result)
a.deepEqual(parsePoly([[10, 20], [30, 40], [50, 60]]), result)
a.deepEqual(parsePoly(new Float32Array([10, 20, 30, 40, 50, 60])), result)
a.deepEqual(parsePoly([new Float32Array([10, 20]), new Float32Array([30, 40]), new Float32Array([50, 60])]), result)
a.deepEqual(parsePoly([{x: 10, y: 20}, {x: 30, y: 40}, {x: 50, y: 60}]), result)
a.deepEqual(parsePoly({
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [[10, 20], [30, 40], [50, 60]]
  }
}), result)
