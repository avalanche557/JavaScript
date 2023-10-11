//this is a example of mothod chain 
// "." can only be accessed for a object so computeAmount() function will returh a object which has all this function 


const computeAmount = ()  => {
    const temp = {
        total:0,
        lacs: function(num) {
            total += num * 100000;
            return this
        },
        crore: function(num) {
            total += num * 10000000;
            return this
        },
        thousand: function(num) {
            total += num * 1000;
            return this
        },
        value: function() {
            return total
        }

    }
    return temp
}


const total  = computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()


