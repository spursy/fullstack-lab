/**
 * created by spursyy at 2017-12-13
 */
var log4js = require('../../../nodejs/log/log4js.js');
var expect = require('chai').expect;

//test suite
describe('test bind file', function() {
    //test case
    it('test keyword this is undefined ', function(){
        expect.equal(bind.get_age_undefined(), undefined);
    })
})