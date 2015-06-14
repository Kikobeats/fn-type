'use strict';

module.exports = function(something) {
  if (something === void 0 || something === null) return String(something);

  var classToType = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regexp',
    '[object Object]'   : 'object'
  };

  return classToType[Object.prototype.toString.call(something)];
};

