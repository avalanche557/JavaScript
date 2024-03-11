console.log([1,2,3,4].map((currentValue, index) => currentValue + 2))

let addTwo = (value) => {
	return value + 2
}


Array.prototype.myMap = function(callback) {
	let i =0
  //this => array
  let res = []
  while(i < this.length) {
  	res.push(callback(this[i]))
    i++
  }
  return res
}

console.log([1,2,3,4].myMap((item) => item + 2))