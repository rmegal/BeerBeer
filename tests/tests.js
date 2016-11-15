/**
 * Created by ray on 11/14/2016.
 */

var should = require('should');
var assert = require('assert');
var threeSeconds = require('seconds');

describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    })
    it('should have the should livrary installed and running for fluent testing.', function () {
        true.should.equal(true);
    })
})
