/**
 * created by spursyy at 2017-12-8
 */
var bind = require('../../js/bind.js');
var expect = require('chai').expect();

//test suite
describe('test bind file', function() {
    //test case
    it('test keyword this is undefined ', function(){
       expect.equal(bind.get_age_undefined(), undefined);
    })

    it('test keyword this is success ', function(){
        expect.equal(bind.get_age_success(), 11);
    })

    it ('test keyword this through bind fun', function() {
        expect.equal(bind.get_age_through_bind(), 11);
    })

    it ('test keyword this through bind fun', function() {
        expect.equal(bind.calculate_age(), 30);
    })
})