'use strict'

var fn = function (something) {
  if (something === void 0 || something === null) return String(something)
  var className = Object.prototype.toString.call(something
    ).replace(/^\[Object\s/i, '').replace(/\]$/, '').toLowerCase();
  if (module.exports.types.indexOf(className) >= 0) { return className; }
  return '?unsupported?:' + className;
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
