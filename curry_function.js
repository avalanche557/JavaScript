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
  //base case 
  if(args.length === 0) {
    return 0
  }
  let storage = [...args];
  let temp = function(...args2) {
    storage.push(...args2);
    if(args2.length === 0) {
      return storage.reduce((a,b) => a+b, 0);
    } else {
      return temp
    }
  }
  return temp
}


let total = sum_curry(10, 30)(20)(30)()
console.log(total)


//curry function - 3
const sum_three = (a,b,c,d,e) => {
  return a+b+c+d+e
}

const curry_three = (fn) => {
  const helper = (...args) => {
    if(args.length >= fn.length) {
      return fn(...args)
    } else {
      const temp = (...args2) => {
          return helper(...args, ...args2)
      }
      return temp
    }
  }
  return helper
}

const curriedSum = curry_three(sum_three)

console.log(curriedSum(1,2,3,4,5,1))
console.log(curriedSum(1)(2,3)(4,5))
console.log(curriedSum(1)(2)(3)(4)(5))

