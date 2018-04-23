'use strict'

module.exports = parsePoly


function parsePoly (arg) {
  var poly = [], i, list, l

  if (arguments.length === 0) return poly

  // coord, coord, ...
  if (arguments.length > 1) {
    list = arguments
  }
  else {
    list = arguments[0]
  }

  // 'x y x y x y ...'
  if (typeof list === 'string') {
    list = list.split(/\s|\s*,\s*/).map(parseFloat)
  }

  // geojson
  if (list.geometry && list.geometry.coordinates) {
    list = list.geometry.coordinates
  }

  // [x, y, x, y, x, y, ...]
  if (list[0] != null) {
    if (typeof list[0] === 'number') {
      for (i = 0, l = list.length / 2; i < l; i++) {
        poly[i] = [list[i*2], list[i*2 + 1]]
      }
    }
    // [[x,y], [x,y], ...]
    else if (list[0].length) {
      for (i = 0, l = list.length; i < l; i++) {
        poly[i] = [list[i][0], list[i][1]]
      }
    }
    // [{x,y}, {x,y}, ...]
    else if (list[0].x != null) {
      for (i = 0, l = list.length; i < l; i++) {
        poly[i] = [list[i].x, list[i].y]
      }
    }

    return poly
  }

  throw Error('Bad polygon type')
}

function parseCoord (arg) {
  if (arg.x !== null && arg.y !== null) return [arg.x, arg.y]
  return arg
}
