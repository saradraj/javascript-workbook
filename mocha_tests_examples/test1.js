// TO DO
// Create a test group named Math
// Create two tests within the group Math.
// Test one: Should test if 3*3 = 9
// Test two: Should test if (3–4)*8 = -8

var assert = require('assert');
describe('test1', function() {
    // Test one: Should test if 3*3 = 9
    if('should test if 3 * 3 = 9', function() {
        assert.equal(9, 3*3);
    });
});
