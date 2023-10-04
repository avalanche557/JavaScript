//this toggle function arguments will return a function which called will console log the arguement in increasing order
//this is example of clouser 


const toggle = (...args) => {
    //storing the index of the last argument so that we can use that to increase and print the next args
    const index = 0
    return function() {
        if(args.length) {
            console.log(args[index++])
            if(index >= args.length) {
                index = 0
            }
        }
    }
}

const onOff = toggle("on", "off");
onOff()
onOff()
onOff()