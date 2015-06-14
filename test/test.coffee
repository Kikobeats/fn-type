typeOf = require '..'
should = require 'should'

describe 'fn-typeof ::', ->

  it 'object', ->
    typeOf({}).should.be.equal 'object'

  it 'array', ->
    typeOf([]).should.be.equal 'array'
