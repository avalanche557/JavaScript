//promise polyfill


const myPromise = function (executor) {

	let onResolve
  let onReject
  
  function resolve(val) {
  	onResolve(val)
  }
  
  function reject(val) {
  	onReject(val)
  }
  
	this.then = function(callback) {
  	onResolve= callback
    return this;
  }
  
  this.catch = function(callback){
  	onReject = callback
    return this;
  }
	
  executor(resolve, reject)
}

const foo = new myPromise((res, rej) => {
    console.log(2)
    setTimeout(() => {
        res("this is promise")
    }, 500)
})

foo.then((res) => {
    console.log(res)
}).catch((err) => {
	console.log(err)
})

// polyfill for promise.all
const functionOne = function() {
	return new Promise((resolve, reject) => {
  	
    setTimeout(() => {
    	resolve("one resloved")
    }, 1000)
  })
}

const functionTwo = function() {
	return new Promise((resolve, reject) => {
  	
    setTimeout(() => {
    	resolve("two resloved")
    }, 2000)
  })
}

const functionThree = function() {
	return new Promise((resolve, reject) => {
  	
    setTimeout(() => {
    	resolve("three resloved")
    }, 2000)
  })
}

Promise.ployfillAll = function(arr) {
	return new Promise((resolve, reject) => {
  	const result = []
    let pending = arr.length
    arr.forEach((promise, index) => {
    		Promise.resolve(promise).then((res) => {
        	result[index] = res
          pending--
          if(pending === 0) {
            resolve(result)
          }
        }, reject)
        
    })
  })
  
}

Promise.ployfillAll([functionOne(), functionTwo(),functionThree() ]).then((res) => console.log(res))




