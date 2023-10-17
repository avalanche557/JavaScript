<div id='root'>
</div>
//JS Code

const dom = {
	type: 'div',
  props: {id: "hello"},
  children: [{type: "h1", children: "HELLO"}]
}

//so we need to append all the eleement to the root element
const generateDOM = (entry, dom) => {
    const helper = (obj) => {
        const {type, props, children} = obj
        const ele = document.createElement(type)
        if(props) {
            for(let item of props) {
                ele[item] = props[item]
            }
        }
        if(typeof children === 'string') {
            ele.innerText = children
        } else {
            const fragment = document.createDocumentFragment();
            for(let child in children) {
                fragment.appendChild(helper(child))
            }
            ele.appendChild(fragment)
        }
        return ele
    }
    const generatedDom = helper(dom)
    entry.appendChild(generatedDom)
}

const entry = document.getElementById('root')
generateDOM(entry, dom)