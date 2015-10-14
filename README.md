# fn-typeof

![Last version](https://img.shields.io/github/tag/Kikobeats/fn-typeof.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/fn-typeof/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/fn-typeof)
[![Dependency status](http://img.shields.io/david/Kikobeats/fn-typeof.svg?style=flat-square)](https://david-dm.org/Kikobeats/fn-typeof)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/fn-typeof.svg?style=flat-square)](https://david-dm.org/Kikobeats/fn-typeof#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/fn-typeof.svg?style=flat-square)](https://www.npmjs.org/package/fn-typeof)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat-square)](https://www.gittip.com/Kikobeats/)

> Get the type of something. Seriously.

## Install

```bash
npm install fn-typeof --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install fn-typeof --save
```

and later link in your HTML:

```html
<script src="bower_components/fn-typeof/dist/fn-typeof.js"></script>
```

## Usage

```js
var typeOf = require('fn-typeof');

console.log(typeOf({})) // => 'object'
console.log(typeOf([])) // => 'array'

console.log(typeOf.types)
// => [
// 'array',
// 'boolean',
// 'date',
// 'function',
// 'number',
// 'object',
// 'regexp',
// 'string'
// ];

```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
