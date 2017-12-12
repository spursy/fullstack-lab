/**
 * created by spursyy at 2017-12-12
 */
var uncurrying = require('../../js/uncurrying.js');
var expect = require('chai').expect;

// test suite
describe('test uncurrying file', function() {
    //test case
    it('test uncurrying fun', function () {
        var split=uncurrying.currying_fun(String.prototype.split);
        expect(split("a, b, c",',').length, 3);
    })
})