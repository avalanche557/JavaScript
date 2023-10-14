//Input: s = "anagram", t = "nagaram"
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
    	return false
    }
    let sObj = {}, tObj = {}
    for(let i = 0; i < s.length; i++) {
    	if(sObj.hasOwnProperty(s[i])) {
      	sObj[s[i]] = sObj[s[i]]+1
      } else {
      	sObj[s[i]] = 1
      }
      if(tObj.hasOwnProperty(t[i])) {
      	tObj[t[i]] = tObj[t[i]]+1
      } else {
      	tObj[t[i]] = 1
      }
    }
    return haveSameData(sObj, tObj)
};

const haveSameData = function (obj1, obj2) { 
        const obj1Length = Object.keys(obj1).length; 
        const obj2Length = Object.keys(obj2).length; 
  
        if (obj1Length === obj2Length) { 
            return Object.keys(obj1).every( 
                key => obj2.hasOwnProperty(key) 
                    && obj2[key] === obj1[key]); 
        } 
        return false; 
    } 


console.log(isAnagram("cat", "rat"))