import { useState } from 'react';
import Header from './components/Header'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState({})

  console.log(isLoading)

  return (
    <div id="app">
      <Header title={isLoading ? 'Loading...' : count.data} />
      <button onClick={() => {
        setIsLoading(true)

        setTimeout(() => {
          setCount({
            data: 'ini data dari api'
          })
          setIsLoading(false)
        },5000)
      }}>Count</button>
    </div>
  )
}

export default App