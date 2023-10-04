/*
* this is the code for request/response interceptor
* intercepter works as a wall between the server and the client where we *	can modify the request or response (eg: add headers to the request)
*/

//firstly storing the orginal fetch method do that we can use it in the fetch method to send the request and response

const originalFetch = window.fetch;


window.fetch = async (...args) => {
  //storing the argr in a variable so that we can send that data to the request
  
  const updatedargs = requestInterceptor(args)
  
  //now sending the request with the uopdated Request
  
  const response = await originalFetch(updatedargs)
  
  const updatedResponse = responseInterceptor(response)
  
  return updatedResponse
  
}

window.requestInterceptor = (args) => {
	//we can do any modifcation to the args before sending the data for request
  console.log("in request interceptor")
	return args
}

window.responseInterceptor = (response) => {
	return response.json()
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then(response => { console.log(response)})