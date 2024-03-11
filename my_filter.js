Array.prototype.myFilter = function (callback) {
	let i = 0
  let res = []
  while(i < this.length) {
  	let currentValue = callback(this[i])
    if(currentValue) {
    	res.push(this[i])
    }
    i++
  }
  return res
  
}

console.log([1,2,3,4,5].filter((item) => item > 2))

console.log([1,2,3,4,5].myFilter((item) => item > 2))