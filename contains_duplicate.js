/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const temp = new Set()
    for(let i = 0; i <= nums.length; i++) {
        if(temp.has(nums[i])){
            return true
        } else{
            temp.add(nums[i])
        }
    }
    return false
    
};