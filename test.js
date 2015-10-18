var namespace = require('tessed').namespace
var alias = require('./index')

var test = namespace('alias')

test('alias()', function (t) {

  t.deepEqual(alias(), {
    type: 'alias',
    value: []
  }, 'no inputs')

  t.deepEqual(alias('one', 'two'), {
    type: 'alias',
    value: ['one', 'two']
  }, 'multiple inputs')
})
