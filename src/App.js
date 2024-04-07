import { useState, useEffect } from 'react';
import Header from './components/Header'

const App = () => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [listHeader, setListHeader] = useState([
    'Title 3',
    'Title 4',
    'Title 5',
  ])

  useEffect(() => {
    console.log('useEffect')
  }, [count, isLoading])

  const renderCount = () => {
    if(count === 0) {
      return <p>kosong</p>
    } else {
      return <p>{count}</p>
    }
  }

  return (
    <div id="app">
      {listHeader.map((item, index) => (
        <Header key={String(index)} title={item} />
      ))}

      {renderCount()}

      <button onClick={() => {
        setIsLoading(true)
        setCount(count + 1)
      }}>Count</button>
    </div>
  )
}

export default App