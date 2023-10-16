const deepFlatObject =(obj, prefix="") => {
    let output = {}
    for(let key in obj) {
        let val = obj[key]
        let newKey = prefix === "" ? key : prefix+"."+key
        if(val !== null  && typeof val === 'object') {
            const temp = deepFlatObject(val, newKey)
            output = {...output,...temp}
        } else {
            output[newKey] = val
        }
    }
    return output
}



let input = {
	A: "12",
  B: 23,
  C:{
  	D: 23,
    E: {
    	F: "25"
    }
  },
  G: ['1', "3"]
}

