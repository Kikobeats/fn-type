# fn-type

![Last version](https://img.shields.io/github/tag/Kikobeats/fn-type.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/fn-type/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/fn-type)
[![Dependency status](http://img.shields.io/david/Kikobeats/fn-type.svg?style=flat-square)](https://david-dm.org/Kikobeats/fn-type)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/fn-type.svg?style=flat-square)](https://david-dm.org/Kikobeats/fn-type#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/fn-type.svg?style=flat-square)](https://www.npmjs.org/package/fn-type)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)

> Get the type of something. Seriously.

## Install

```bash
npm install fn-type --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install fn-type --save
```

and later link in your HTML:

```html
<script src="bower_components/fn-type/dist/fn-type.js"></script>
```

## Usage

```js
var typeOf = require('fn-type');

console.log(typeOf({})) // => 'object'
console.log(typeOf([])) // => 'array'

console.log(typeOf.types)
// => [
//  'arguments',
//  'array',
//  'arraybuffer',
//  'boolean',
//  'date',
//  'error',
//  'float32array',
//  'float64array',
//  'function',
//  'generatorfunction',
//  'int16array',
//  'int32array',
//  'int8array',
//  'map',
//  'number',
//  'object',
//  'regexp',
//  'set',
//  'string',
//  'symbol',
//  'uint16array',
//  'uint32array',
//  'uint8array',
//  'uint8clampedarray',
//  'weakmap',
//  'weakset'
// ];

```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
