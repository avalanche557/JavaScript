//memozie function means when we run a function we store the result for the first time and if the function is run 
//again we don't compute again rather return the stored Data untill the args of the function is changed

//it only works for the pure function


const memoize = (fn) => {
	let cache = {}
  return function (...args) {
  	let key = JSON.stringify(args);
    if(cache[key]) {
    	console.log("in cache")
    	return cache[key]
    } else {
    	const evealutedValue = fn(...args)
      cache[key] = evealutedValue
      return evealutedValue
    }
  }
}

const factorial = (n) => {
	if(n=== 0 || n === 1) {
  	return 1
  } 
  return factorial(n-1) * n
}

const temp = memoize(factorial)
console.log(temp(4))
console.log(temp(4))
console.log(temp(4))
