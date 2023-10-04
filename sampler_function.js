//this function will take two args (function and count) and excute the function on count run of the functiom
const message = (msg) => {
    console.log(msg);
}

const sampler = (callback, count) => {
    let temp = 0;
    return function(...args) {
        temp++
        if(temp === count){
            callback(...args)
            temp = 0;
        }
    }
}


const sample  = sampler(message, 3)
sample("hello")
sample("hello")
sample("hello") //"hello"
sample("hello")
sample("hello")
sample("hello") //"hello"



