//create a array with event where we are able to trigger the event when we call the event 
//one event can have miltiple callbacks 

let arr = []

Array.prototype.listners = {}

Array.prototype.addListners = function(event, callback) {
		if(!this.listners.hasOwnProperty(event)) {
    	this.listners[event] = []
    }
    this.listners[event].push(callback)
}


Array.prototype.pushWithEvent = function(event, value) {
	if(this.listners[event]) {
  	this.push(...value)
  	this.listners[event].map((callback) => {
    	callback(event, value, this)
    })
  }
}

Array.prototype.popWithEvent = function(event) {
	if(this.listners.hasOwnProperty(event)) {
  	console.log(this)
  	const value = this.pop()
  	this.listners[event].map((callback) => {
    	callback(event, value, this)
    })
  }
}


arr.addListners('add', (eventName, items, array) => {
		console.log("items were added", items)
})

arr.addListners('add', (eventName, items, array) => {
		console.log("items were added again", items)
})

arr.addListners('remove', (eventName, item, array) => {
	console.log(item, "was removed")
})

arr.pushWithEvent("add", [4,5])
arr.pushWithEvent("add", [6,7])
arr.popWithEvent('remove')