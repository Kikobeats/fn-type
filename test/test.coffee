typeOf = require '..'
should = require 'should'

describe 'fn-typeof ::', ->
  it 'null', ->
    typeOf(null).should.be.equal 'null'

  it 'undefined', ->
    typeOf(undefined).should.be.equal 'undefined'

  it 'arguments', ->
  	typeOf((-> return arguments)()).should.be.equal 'arguments'

  it 'array', ->
	  typeOf([]).should.be.equal 'array'

  it 'arraybuffer', ->
    typeOf(new ArrayBuffer()).should.be.equal 'arraybuffer'

  it 'boolean', ->
	  typeOf(true).should.be.equal 'boolean'

  it 'date', ->
    typeOf(new Date()).should.be.equal 'date'

  it 'error', ->
    typeOf(new Error()).should.be.equal 'error'

  it 'float32array', ->
    typeOf(new Float32Array()).should.be.equal 'float32array'

  it 'float64array', ->
    typeOf(new Float64Array()).should.be.equal 'float64array'

  it 'int8array', ->
    typeOf(new Int8Array()).should.be.equal 'int8array'

  it 'int16array', ->
    typeOf(new Int16Array()).should.be.equal 'int16array'

  it 'int32array', ->
    typeOf(new Int32Array()).should.be.equal 'int32array'

  it 'number', ->
    typeOf(0).should.be.equal 'number'

  it 'regexp', ->
    typeOf(/\w+/).should.be.equal 'regexp'

  it 'object', ->
    typeOf({}).should.be.equal 'object'

  it 'string', ->
    typeOf('').should.be.equal 'string'

  it 'uint8clampedarray', ->
    typeOf(new Uint8ClampedArray()).should.be.equal 'uint8clampedarray'

  it 'uint16array', ->
    typeOf(new Uint16Array()).should.be.equal 'uint16array'

  it 'uint32array', ->
    typeOf(new Uint32Array()).should.be.equal 'uint32array'
