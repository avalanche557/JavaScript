// implement your own clearAllTimeOut

//firstly we need a global variable which will store all the ids of the setTimeout function 
window.allSetTimeoutIds = []
//now we need to store the original setTimeout function so that wee can modify the function to store the ids in global variable
const originalSetTimeout = window.setTimeout;

//now modifying the setTimeout function to add the ids to the global variable
window.setTimeout = function(fn, delay) {
    const id = originalSetTimeout(fn, delay);
    allSetTimeoutIds.push(id);
    return id;
}
// adding a clearallsettimeout function

window.clearAllSetTimeout = function() {
    while(allSetTimeoutIds.length){
        clearTimeout(allSetTimeoutIds.pop())
    }
}

setTimeout(() => {
    console.log("1")
}, 1000)

setTimeout(() => {
    console.log("2")
}, 2000)

setTimeout(() => {
    clearAllSetTimeout()
}, 2500)

setTimeout(() => {
    console.log("3")
}, 3000)

setTimeout(() => {
    console.log("4")
}, 4000)



