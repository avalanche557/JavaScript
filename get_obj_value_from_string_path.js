const get = (obj, path) => {
    //event an array is a object and we can access the value of arrays from  "."
    //we will replace [] with . in the string path 
    path = path.replaceAll("[", ".")
    path = path.replaceAll(']', "")
    //.1.1
    let keys = path.split(".").filter(Boolean)
    //[1,1]
    let current =  obj
    for (let key of keys) {
        current = current[key]
        if( current === undefined) {
            return undefined
        }
    }
    return current
}







console.log(get ({ developer: "Software Engineer" }, "developer")) // => 'Software Engineer' 
console.log(get ({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName")) //=>'Cruz 
console.log(get ([{developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"))
console.log(get ([{ developer: "Tom" }, [0, null]], "[1][1]")) //=>null