const testPromise = () => {
    let count = 0
    return () => {
        return new Promise((resolve,reject) => {
            count += 1
            if(count <= 5) {
                reject("i am failing")
            } else {
                reslove("I am successfull");
            }
        })
    }
}
const retry = (fn, retries, finalError) => {
    return new Promise((resolve, reject) => {
        fn().then
    })
}