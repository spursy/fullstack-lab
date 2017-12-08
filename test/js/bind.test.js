/**
 * created by spursyy at 2017-12-8
 */
var bind = require('../../js/bind.js');
var expect = require('chai').expect();

//test suite
describe('net work request fun', function() {
    //test case
    it('get json test', function(){
       expect.equal(bind.get_age(), undefined)
    })
})