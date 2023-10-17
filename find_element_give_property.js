//Find all the DOM elements with given property
<div id='root'>
  <span style="color:red">Red</span>
  <span style="color:orange">Orange</span>
  <span style="color:#f00">Red</span>
  <span style="color:#ff0000">Red</span>
  <span style="color:rgb(255, 0, 0)">Red</span>
</div>

//JS code

//we need a helper function to get the computed color code so that we can have uniform color value

const getComputedColor = (colorCode) => {
    const div = document.createElement('div')
    div.style.color = colorCode
    document.body.appendChild(div)
    const computedStyle = window.getComputedStyle(div)
    const { color } = computedStyle;
    document.body.removeChild(div)
    return color
}

const fillAllEle = (root, color) => {
    const standardComputedColor = getComputedColor(color)

    const output = []

    const search = (ele) => {
        const eleColor = ele.style.color
        const eleComputedColor = getComputedColor(eleColor)
        if(eleComputedColor === standardComputedColor) {
            output.push(ele);
        }
        for(let child of ele.children){
            search(child)
        }
        search(root)
        return output
    }
} 

const root = document.getElementById('root');
console.log(fillAllEle(root, "red"))