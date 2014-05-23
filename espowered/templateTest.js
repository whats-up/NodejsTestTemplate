var assert, hogeFunc, _anderScore;
assert = require('power-assert');
_anderScore = require('underscore');
hogeFunc = require('../js/template').hoge;
describe('template Test', function () {
    describe('hoges', function () {
    });
    it('hoge', function () {
        var text;
        text = hogeFunc();
        assert(assert._expr(assert._capt(assert._capt(text, 'arguments/0/left') === 'hage', 'arguments/0'), {
            content: 'assert(text === \'hage\')',
            filepath: 'test/templateTest.js',
            line: 14
        }));
        assert.equal(assert._expr(assert._capt(text, 'arguments/0'), {
            content: 'assert.equal(text, \'hage\')',
            filepath: 'test/templateTest.js',
            line: 15
        }), 'hage');
        assert.notEqual(assert._expr(assert._capt(text, 'arguments/0'), {
            content: 'assert.notEqual(text, \'hoge\')',
            filepath: 'test/templateTest.js',
            line: 16
        }), 'hoge');
        assert.deepEqual(assert._expr(assert._capt(text, 'arguments/0'), {
            content: 'assert.deepEqual(text, \'hage\')',
            filepath: 'test/templateTest.js',
            line: 17
        }), 'hage');
        assert.notDeepEqual(assert._expr(assert._capt(text, 'arguments/0'), {
            content: 'assert.notDeepEqual(text, \'hoge\')',
            filepath: 'test/templateTest.js',
            line: 18
        }), 'hoge');
        assert.throws(function () {
            throw new Error('boke');
        });
        assert.doesNotThrow(function () {
            return true;
        });
        return assert.ok(assert._expr(assert._capt(assert._capt(text, 'arguments/0/callee/object').match('ha..'), 'arguments/0'), {
            content: 'assert.ok(text.match(\'ha..\'))',
            filepath: 'test/templateTest.js',
            line: 25
        }));
    });
    return it('fail', function () {
        var text;
        text = { hoge: { hage: { kaze: 'fool' } } };
        return assert(assert._expr(assert._capt(assert._capt(assert._capt(assert._capt(assert._capt(text, 'arguments/0/left/object/object/object').hoge, 'arguments/0/left/object/object').hage, 'arguments/0/left/object').kaze, 'arguments/0/left') === 'baka', 'arguments/0'), {
            content: 'assert(text.hoge.hage.kaze === \'baka\')',
            filepath: 'test/templateTest.js',
            line: 36
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdGVtcGxhdGVUZXN0LmpzIl0sIm5hbWVzIjpbImFzc2VydCIsImhvZ2VGdW5jIiwiX2FuZGVyU2NvcmUiLCJyZXF1aXJlIiwiaG9nZSIsImRlc2NyaWJlIiwiaXQiLCJ0ZXh0IiwiX2V4cHIiLCJfY2FwdCIsImNvbnRlbnQiLCJmaWxlcGF0aCIsImxpbmUiLCJlcXVhbCIsIm5vdEVxdWFsIiwiZGVlcEVxdWFsIiwibm90RGVlcEVxdWFsIiwidGhyb3dzIiwiRXJyb3IiLCJkb2VzTm90VGhyb3ciLCJvayIsIm1hdGNoIiwiaGFnZSIsImthemUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQUosRUFBWUMsUUFBWixFQUFzQkMsV0FBdEI7QUFFQUYsTUFBQSxHQUFTRyxPQUFBLENBQVEsY0FBUixDQUFULENBRkE7QUFJQUQsV0FBQSxHQUFjQyxPQUFBLENBQVEsWUFBUixDQUFkLENBSkE7QUFNQUYsUUFBQSxHQUFXRSxPQUFBLENBQVEsZ0JBQVIsRUFBMEJDLElBQXJDLENBTkE7QUFRQUMsUUFBQSxDQUFTLGVBQVQsRUFBMEIsWUFBVztBQUFBLElBQ25DQSxRQUFBLENBQVMsT0FBVCxFQUFrQixZQUFXO0FBQUEsS0FBN0IsRUFEbUM7QUFBQSxJQUVuQ0MsRUFBQSxDQUFHLE1BQUgsRUFBVyxZQUFXO0FBQUEsUUFDcEIsSUFBSUMsSUFBSixDQURvQjtBQUFBLFFBRXBCQSxJQUFBLEdBQU9OLFFBQUEsRUFBUCxDQUZvQjtBQUFBLFFBR3BCRCxNQUFBLENBQU9BLE1BQUEsQ0FBQVEsS0FBQSxDQUFBUixNQUFBLENBQUFTLEtBQUEsQ0FBQVQsTUFBQSxDQUFBUyxLQUFBLENBQUFGLElBQUEsMEJBQVMsTUFBVDtBQUFBLFlBQUFHLE9BQUE7QUFBQSxZQUFBQyxRQUFBO0FBQUEsWUFBQUMsSUFBQTtBQUFBLFVBQVAsRUFIb0I7QUFBQSxRQUlwQlosTUFBQSxDQUFPYSxLQUFQLENBQWFiLE1BQUEsQ0FBQVEsS0FBQSxDQUFBUixNQUFBLENBQUFTLEtBQUEsQ0FBQUYsSUFBQTtBQUFBLFlBQUFHLE9BQUE7QUFBQSxZQUFBQyxRQUFBO0FBQUEsWUFBQUMsSUFBQTtBQUFBLFVBQWIsRUFBbUIsTUFBbkIsRUFKb0I7QUFBQSxRQUtwQlosTUFBQSxDQUFPYyxRQUFQLENBQWdCZCxNQUFBLENBQUFRLEtBQUEsQ0FBQVIsTUFBQSxDQUFBUyxLQUFBLENBQUFGLElBQUE7QUFBQSxZQUFBRyxPQUFBO0FBQUEsWUFBQUMsUUFBQTtBQUFBLFlBQUFDLElBQUE7QUFBQSxVQUFoQixFQUFzQixNQUF0QixFQUxvQjtBQUFBLFFBTXBCWixNQUFBLENBQU9lLFNBQVAsQ0FBaUJmLE1BQUEsQ0FBQVEsS0FBQSxDQUFBUixNQUFBLENBQUFTLEtBQUEsQ0FBQUYsSUFBQTtBQUFBLFlBQUFHLE9BQUE7QUFBQSxZQUFBQyxRQUFBO0FBQUEsWUFBQUMsSUFBQTtBQUFBLFVBQWpCLEVBQXVCLE1BQXZCLEVBTm9CO0FBQUEsUUFPcEJaLE1BQUEsQ0FBT2dCLFlBQVAsQ0FBb0JoQixNQUFBLENBQUFRLEtBQUEsQ0FBQVIsTUFBQSxDQUFBUyxLQUFBLENBQUFGLElBQUE7QUFBQSxZQUFBRyxPQUFBO0FBQUEsWUFBQUMsUUFBQTtBQUFBLFlBQUFDLElBQUE7QUFBQSxVQUFwQixFQUEwQixNQUExQixFQVBvQjtBQUFBLFFBUXBCWixNQUFBLENBQU9pQixNQUFQLENBQWMsWUFBVztBQUFBLFlBQ3ZCLE1BQU0sSUFBSUMsS0FBSixDQUFVLE1BQVYsQ0FBTixDQUR1QjtBQUFBLFNBQXpCLEVBUm9CO0FBQUEsUUFXcEJsQixNQUFBLENBQU9tQixZQUFQLENBQW9CLFlBQVc7QUFBQSxZQUM3QixPQUFPLElBQVAsQ0FENkI7QUFBQSxTQUEvQixFQVhvQjtBQUFBLFFBY3BCLE9BQU9uQixNQUFBLENBQU9vQixFQUFQLENBQVVwQixNQUFBLENBQUFRLEtBQUEsQ0FBQVIsTUFBQSxDQUFBUyxLQUFBLENBQUFULE1BQUEsQ0FBQVMsS0FBQSxDQUFBRixJQUFBLCtCQUFLYyxLQUFMLENBQVcsTUFBWDtBQUFBLFlBQUFYLE9BQUE7QUFBQSxZQUFBQyxRQUFBO0FBQUEsWUFBQUMsSUFBQTtBQUFBLFVBQVYsQ0FBUCxDQWRvQjtBQUFBLEtBQXRCLEVBRm1DO0FBQUEsSUFrQm5DLE9BQU9OLEVBQUEsQ0FBRyxNQUFILEVBQVcsWUFBVztBQUFBLFFBQzNCLElBQUlDLElBQUosQ0FEMkI7QUFBQSxRQUUzQkEsSUFBQSxHQUFPLEVBQ0xILElBQUEsRUFBTSxFQUNKa0IsSUFBQSxFQUFNLEVBQ0pDLElBQUEsRUFBTSxNQURGLEVBREYsRUFERCxFQUFQLENBRjJCO0FBQUEsUUFTM0IsT0FBT3ZCLE1BQUEsQ0FBT0EsTUFBQSxDQUFBUSxLQUFBLENBQUFSLE1BQUEsQ0FBQVMsS0FBQSxDQUFBVCxNQUFBLENBQUFTLEtBQUEsQ0FBQVQsTUFBQSxDQUFBUyxLQUFBLENBQUFULE1BQUEsQ0FBQVMsS0FBQSxDQUFBVCxNQUFBLENBQUFTLEtBQUEsQ0FBQUYsSUFBQSwyQ0FBS0gsSUFBTCxvQ0FBVWtCLElBQVYsNkJBQWVDLElBQWYsMEJBQXdCLE1BQXhCO0FBQUEsWUFBQWIsT0FBQTtBQUFBLFlBQUFDLFFBQUE7QUFBQSxZQUFBQyxJQUFBO0FBQUEsVUFBUCxDQUFQLENBVDJCO0FBQUEsS0FBdEIsQ0FBUCxDQWxCbUM7QUFBQSxDQUFyQyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhc3NlcnQsIGhvZ2VGdW5jLCBfYW5kZXJTY29yZTtcblxuYXNzZXJ0ID0gcmVxdWlyZSgncG93ZXItYXNzZXJ0Jyk7XG5cbl9hbmRlclNjb3JlID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xuXG5ob2dlRnVuYyA9IHJlcXVpcmUoXCIuLi9qcy90ZW1wbGF0ZVwiKS5ob2dlO1xuXG5kZXNjcmliZShcInRlbXBsYXRlIFRlc3RcIiwgZnVuY3Rpb24oKSB7XG4gIGRlc2NyaWJlKFwiaG9nZXNcIiwgZnVuY3Rpb24oKSB7fSk7XG4gIGl0KCdob2dlJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRleHQ7XG4gICAgdGV4dCA9IGhvZ2VGdW5jKCk7XG4gICAgYXNzZXJ0KHRleHQgPT09ICdoYWdlJyk7XG4gICAgYXNzZXJ0LmVxdWFsKHRleHQsICdoYWdlJyk7XG4gICAgYXNzZXJ0Lm5vdEVxdWFsKHRleHQsICdob2dlJyk7XG4gICAgYXNzZXJ0LmRlZXBFcXVhbCh0ZXh0LCAnaGFnZScpO1xuICAgIGFzc2VydC5ub3REZWVwRXF1YWwodGV4dCwgJ2hvZ2UnKTtcbiAgICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYm9rZVwiKTtcbiAgICB9KTtcbiAgICBhc3NlcnQuZG9lc05vdFRocm93KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFzc2VydC5vayh0ZXh0Lm1hdGNoKCdoYS4uJykpO1xuICB9KTtcbiAgcmV0dXJuIGl0KCdmYWlsJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRleHQ7XG4gICAgdGV4dCA9IHtcbiAgICAgIGhvZ2U6IHtcbiAgICAgICAgaGFnZToge1xuICAgICAgICAgIGthemU6ICdmb29sJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gYXNzZXJ0KHRleHQuaG9nZS5oYWdlLmthemUgPT09ICdiYWthJyk7XG4gIH0pO1xufSk7XG4iXX0=
