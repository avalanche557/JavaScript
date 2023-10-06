//this is a curry function  - 1
const curry = () => {
  let sum = 0
    return function(args = 0) {
    sum = sum + args
    console.log(sum)
  }
    
}
let sum = curry()
sum(5)
sum(1)
sum(4)
sum()

// curry function - 2

const sum_curry = (...args) => {
  let storage = [...args]
  //base case is if there is no arguments
  if(storage.length === 0) {
    return 0
  } 
  const temp = function(...args2) {
    storage.push(...args2)
    if(args2.length === 0) {
      return storage.reduce((a, b) => a+b, 0)
    } else {
      return temp;
    }
  }
  return temp
}


let total = sum_curry(10)(20)(30)()
console.log(total)