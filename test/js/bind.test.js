/**
 * created by spursyy at 2017-12-8
 */
var bind = require('../../js/bind.js');
var expect = require('chai').expect();

//test suite
describe('test bind file', function() {
    //test case
    it('test keyword this is undefined ', function(){
       expect.equal(bind.get_age(), undefined)
    })
})