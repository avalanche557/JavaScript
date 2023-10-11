//given a obj 
const obj = {
	a: {
  	b: (a, b, c) => a+b+c,
    c: (a, b, c) => a+b-c,
  },
  d: (a, b, c) => a-b-c,
}

// // write a function to get the obj and the three parameters and return 
// {
//     a: {
//       b: 5,
//       c: 1
//     },
//     d: -3
//   }

//Code
const Fn = (obj) => {
    return function(...args) {
        for(let key in obj) {
            const val = obj[key];
            if(typeof val === 'function' ){
                obj[key] = val(...args);
            } else {
                Fn(val)(...args)
            }
        }
    }
}
Fn(obj)(1,2,2)