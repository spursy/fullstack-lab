/**
 * created by spursyy at 2017-12-9
 */
var currying = require('../../js/currying.js');
var expect = require('chai').expect;

console.log(currying.high_order_fun(10)(10)(10))

//test suite
describe('test bind file', function() {
    //test case
    it('test high order fun', function () {
        expect(currying.high_order_fun(10)(10)(10), 30);
    })

    it('test map_reduce fun', function () {
        expect(currying.map_reduce_fun([10, 20, 30], 5), 300);
    })

    it('test currying fun', function () {
        function add () {
            var sum = 0;
            for (var i=0; i < arguments.length; i++) {
                sum =+ arguments[i]
            }
            return sum;
        }
        var curryingAdd = currying.currying_fun(add);

        expect(curryingAdd(1)(2)(3)(4)() ,10 );

    })

})