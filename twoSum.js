var twoSum = function(nums, target) {
    let temp = {}
    for(let i = 0; i < nums.length; i++) {
      let val = target - nums[i]
    	if(temp.hasOwnProperty(val)){
      	return [nums.indexOf(val), i]
      } else {
      	temp[nums[i]] = val
      }
     	
    }
};
console.log(twoSum([2,7,11,15], 9)) 