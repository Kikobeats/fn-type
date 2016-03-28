'use strict'

var headRegexp = /^\[Object\s/i
var tailRegexp = /\]$/

function fn (something) {
  if (something == null) return String(something)

  var className = Object.prototype.toString.call(something)
    .replace(headRegexp, '')
    .replace(tailRegexp, '')
    .toLowerCase()

  if (fn.types.indexOf(className) !== -1) return className
  return new Error('?unsupported?:' + className)
}

fn.types = [
  'arguments',
  'array',
  'arraybuffer',
  'boolean',
  'date',
  'error',
  'float32array',
  'float64array',
  'function',
  'generatorfunction',
  'int16array',
  'int32array',
  'int8array',
  'map',
  'number',
  'object',
  'regexp',
  'set',
  'string',
  'symbol',
  'uint16array',
  'uint32array',
  'uint8array',
  'uint8clampedarray',
  'weakmap',
  'weakset'
]

module.exports = fn
