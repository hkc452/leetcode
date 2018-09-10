var expect = require('chai').expect
var twoSum = require('../src/1')

describe('测试1.js', function() {
    it('寻找数组中两数相加等于目标值', function() {
        expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1])
    })
})