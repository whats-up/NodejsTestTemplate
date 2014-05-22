var assert, hogeFunc, _anderScore;

assert = require('assert');

_anderScore = require('underscore');

hogeFunc = require("../js/template").hoge;

describe("template Test", function() {
  describe("hoges", function() {});
  it('hoge', function() {
    var text;
    text = hogeFunc();
    assert.equal(text, 'hage');
    assert.notEqual(text, 'hoge');
    assert.deepEqual(text, 'hage');
    assert.notDeepEqual(text, 'hoge');
    assert.throws(function() {
      throw new Error("boke");
    });
    assert.doesNotThrow(function() {
      return true;
    });
    return assert.ok(text.match('ha..'));
  });
  return it('fail', function() {
    return assert.fail('hoge', 'hage', 'kaze');
  });
});
