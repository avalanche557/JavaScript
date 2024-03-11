console.log([1,2,4,5,6].reduce((acc, currentValue) => {
	return  acc+currentValue
}, 0))

let sum= function(a,b) {
	return a+b
}

Array.prototype.myReduce = function(callback, initialValue) {
	//check for array
  let i = 0;
  let acc = initialValue;
  if(this === null || this === undefined) {
  	throw new Error("pass array")
  }
  if(this.length === 0) {
  	return 0
  }
  if(arguments.length < 2) {
  	acc = 0
  }
	
  
  while(i < this.length) {
  	acc = callback(acc , this[i])
    i++
  }
  return acc


}
console.log([1,2,4,5,6].myReduce(sum))