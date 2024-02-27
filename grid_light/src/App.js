import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

const config = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
]

const Cell = ({isFilled, onCellClick}) => {
  return(
    <button
      class={isFilled? "cell cell-active": "cell"}
      onClick={onCellClick}
    />
  )
}

function App() {
  const [cellFilledorder , setCellFilledOrder] = useState([])
  const [isDeactivating, setIsDeactaving] = useState(false)
  const decativateCell = () => {
    setIsDeactaving(true);
    let newOrder = cellFilledorder
    const timer = setInterval(() => {
      setCellFilledOrder((originOrder) => {
        const newOrder = originOrder.slice()
        newOrder.pop()
        if(newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactaving(false)
        }
        return newOrder
      })
    }, 500)
    
  }

  const  onCellClick = (index) => {
    const newOrder = [...cellFilledorder, index]
    setCellFilledOrder(newOrder)
    if(config.flat(1).filter(Boolean).length === newOrder.length) {
      decativateCell()
    }
  }
  return (
    <div 
      class="grid"
      style={{
        gridTemplateColumns:`repeat(${config[0].length}, 1fr)`
      }}
    >
      {config.flat(1).map((value, index) => {
        return (
          <>
          {value == 1 ?
            <Cell
              key={index}
              onCellClick={() => onCellClick(index)}
              isFilled={cellFilledorder.includes(index)}
              disabled={cellFilledorder.includes(index) || isDeactivating}
            />
            :
            <span/>
          }
          </>
        )
      })}
    </div>
  );
}

export default App;
