var assert, hogeFunc, _anderScore;

assert = require('power-assert');

_anderScore = require('underscore');

hogeFunc = require("../js/template").hoge;

describe("template Test", function() {
  describe("hoges", function() {});
  it('hoge', function() {
    var text;
    text = hogeFunc();
    assert(text === 'hage');
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
    var text;
    text = {
      hoge: {
        hage: {
          kaze: 'fool'
        }
      }
    };
    return assert(text.hoge.hage.kaze === 'baka');
  });
});
