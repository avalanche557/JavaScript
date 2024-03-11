function createAsyncTask () {
	const value = Math.floor(Math.random() * 10)
  return new Promise((resolve, reject) => {
  	setTimeout(() => {
    	if(value < 5) {
      	reject(`error ${value}`)
      } else  {
      	resolve(value * 1000)
      }
    }, value *1000)
  })
}

const tasks = [
	createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
]

const asyncSequence = async (tasks,callback) => {
	const error = []
  const result = []
  for(let task of tasks) {
  	try{
    	const res = await task
      result.push(res)
    } catch(e) {
    	error.push(e)
    }
  }
  callback(error,result)
}

asyncSequence(tasks, (error, result) => {
	console.log("error", error);
  console.log("result", result);
})

// code for the async task to run parallel

const asyncParallel = (tasks, callback) => {
	const error = []
  const result = []
  let completed = 0
  tasks.forEach((task) => {
  	task.then((value) => {
    	result.push(value)
    })
    .catch((e) => {
    	error.push(e)
    })
    .finally(() => {
    	completed++
      if(completed == tasks.length) {
      	callback(error, result)
      }
    })
  })
}

asyncParallel(tasks, (error, result) => {
	console.log("error", error);
  console.log("result", result);
})