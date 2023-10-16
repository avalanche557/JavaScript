import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState} from 'react'

const usePrevious = (val) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = val
  }, [val])
  return ref.current
}


function App() {
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)
  return (
    <div className="App">
      <p>Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;
