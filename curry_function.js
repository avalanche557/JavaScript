//this is a curry function  - 1
const curry = () => {
  let sum = 0
    return function(args = 0) {
    sum = sum + args
    console.log(sum)
  }
    
}
let sum = curry()
sum(5)
sum(1)
sum(4)
sum()

