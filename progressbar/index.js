const root = document.getElementById("root")
let count = 0

const add = () => {
	if(count === 0) {
  	createProgessBar()
  } 
  count += 1;
}
function createProgessBar(n = 2) {
	 const ele = document.createElement('div')
   ele.classList.add("progressBar")
   ele.style = `transition: width ${n}s ease;`
   root.appendChild(ele);
   setTimeout(() => {
   	ele.classList.add("fullWidth")
   }, 50)
   //adding event listner to the transition 
   ele.addEventListener("transitionend", () => {
   		count -= 1;
      if(count >= 1) {
      	createProgessBar()
      }
   })
}