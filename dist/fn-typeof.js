/**
 * fn-typeof - Get the type of something. Seriously.
 * @version v1.0.0
 * @link    https://github.com/Kikobeats/fn-typeof
 * @license MIT
 */require=function r(e,t,o){function n(u,c){if(!t[u]){if(!e[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var b=t[u]={exports:{}};e[u][0].call(b.exports,function(r){var t=e[u][1][r];return n(t?t:r)},b,b.exports,r,e,t,o)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)n(o[u]);return n}({"fn-typeof":[function(r,e,t){"use strict";e.exports=function(r){if(void 0===r||null===r)return String(r);var e={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"};return e[Object.prototype.toString.call(r)]}},{}]},{},[]);