let testPromise = () => {
	let count = 0;
  return () => {
  	return new Promise((resolve, reject)  => {
    	count += 1
      if(count <= 5) {
      	reject("i am failing")
      } else {
      	resolve("i am successfull")
      }
    })
  
	}
}

const retry = (fn, retries , finalError) => {
	return new Promise((resolve, reject) => {
  	fn().then(resolve,() => {
    	if(retries === 1) {
      	reject(finalError)
      }
      retry(fn, retries-1, finalError).then(resolve, reject)
    })
  })
}

retry(testPromise(), 6, "this is final error").then((val) => {
	console.log(val)
}).catch((err) => {
	console.error(err)
})
