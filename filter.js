const deepFilter = (obj, fn) => {
	for (let key in obj) {
  	let val = obj[key]
    if(typeof val === 'object') {
    	deepFilter(val, fn)
    } else {
    	if(fn(val) === false) {
      	delete obj[key]
      }
    }
    if(JSON.stringify(val) === "{}") {
    	delete obj[key]
    }
  }
}


const obj = {
	a: 1,
  b:{
  	c: 2,
    d: -3,
    e: {
    	f: {
      	g: -4
      }
    }
  },
  h: {
  	i: 5,
    j: 6
  },
}


const filter = (n) => n >= 0

deepFilter(obj, filter)
console.log(obj)