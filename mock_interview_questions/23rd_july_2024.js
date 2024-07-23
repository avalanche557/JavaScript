//create a memoize function which returns the value if the function is executed previously
//const add = (a, b) => a+b

//const memoizeOne(add)
//memoizeAdd(1,2)

//solution
const add  = (a, b) => a+b
const map = {}

const memoizeOne = (fn) => {
	return function(...args) {
  	let key = args.join('_')
  	if(map.hasOwnProperty(key)) {
    	console.log("from the map")
    	return map[key]
    } else {
    	const result = fn(...args)
    	map[key] = result
    	return result
    }
  }
}

const memoizeAdd= memoizeOne(add)
console.log(memoizeAdd(1,2))
console.log(memoizeAdd(1,2))
console.log(memoizeAdd(2,1))



//flatten Array
//input = [1,2,[3,[4,5],6],[7,8],9]
//output = [1,2,3,4,5,6,7,8,9]

const flattenArray = (input, output = []) => {
	input.forEach((item) => {
  	if(Array.isArray(item) ) {
    	flattenArray(item, output)
    } else {
    	output.push(item)
    }
  })
  return output
}

console.log(flattenArray(input))