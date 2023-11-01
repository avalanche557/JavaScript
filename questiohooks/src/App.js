import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useRef, useState} from 'react'


//code for usePrevious hooks

const usePrevious = (val) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = val
  }, [val])
  return ref.current
}

//code for useToggle hooks

const useToggle = (arr, index) => {
  const [currentIndex, setCurrentIndex] = useState(index)

  const toggle = useCallback(() => {
    return setCurrentIndex((prevIndex) => prevIndex > arr.length - 1 ?  0 : prevIndex + 1)
  }, [arr])

  return [toggle, currentIndex]
}


function App() {
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)
  const [toogle, value] = useToggle([1,2,3,4,5], 2)
  return (
    <div className="App">
      <p>Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <div>
        <p>Value: {value}</p>
        <button onClick={toogle}>Toggle</button>
      </div>
    </div>
  );
}



export default App;
