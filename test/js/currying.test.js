/**
 * created by spursyy at 2017-12-9
 */
var currying = require('../../js/currying.js');
var expect = require('chai').expect();

//test suite
describe('test bind file', function() {
    //test case
    it('test high order fun', function () {
        expect.equal(currying.high_order_fun(), 30);
    })

    it('test map_reduce fun', function () {
        expect.equal(currying.map_reduce_fun(), 300);
    })

    it('test currying fun', function () {
        expect.equal(currying.currying_fun(), 10);
    })

})