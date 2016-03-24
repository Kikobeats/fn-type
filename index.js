'use strict'

var fn = function (something) {
  if (something === void 0 || something === null) return String(something)

  var classToType = {
    '[object Arguments]': 'arguments',
    '[object Array]': 'array',
    '[object ArrayBuffer]': 'arraybuffer',
    '[object Boolean]': 'boolean',
    '[object Date]': 'date',
    '[object Error]': 'error',
    '[object Float32Array]': 'float32array',
    '[object Float64Array]': 'float64array',
    '[object Function]': 'function',
    '[object GeneratorFunction]': 'generatorfunction',
    '[object Int16Array]': 'int16array',
    '[object Int32Array]': 'int32array',
    '[object Int8Array]': 'int8array',
    '[object Map]': 'map',
    '[object Number]': 'number',
    '[object Object]': 'object',
    '[object RegExp]': 'regexp',
    '[object Set]': 'set',
    '[object String]': 'string',
    '[object Symbol]': 'symbol',
    '[object Uint16Array]': 'uint16array',
    '[object Uint32Array]': 'uint32array',
    '[object Uint8Array]': 'uint8array',
    '[object Uint8ClampedArray]': 'uint8clampedarray',
    '[object WeakMap]': 'weakmap',
    '[object WeakSet]': 'weakset'
  }

  return classToType[Object.prototype.toString.call(something)]
}

module.exports = fn

module.exports.types = [
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
