import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const [password, setPassword] = useState(false)

  const see  = () => {
    if (password === false){
      setPassword(true)
    }else{
      setPassword(false)
    }
  }

  const colors = ["#845EC2", "#D65DB1", "#FF9671", "#FFC75F", "#F9F871", "#008E9B", "#00C9A7", "#845EC2", "#4B4453", "#C34A36", "#B0A8B9", "#FEFEDF"]
  
  useEffect(() => {
    document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]} ` 
  }, [])

 

  return (
    <div className="App">
      <h1>
        Contador
      </h1>
      <h2>
        {count}
      </h2>
      <button onClick={decrement}>
        decrement
      </button>
      <button onClick={increment}>
        increment
      </button>
      <h1>
        Set password
      </h1>
      <input type= { password ? "text": "password"} />
      <button onClick={see}>
        Visisble / Hidden 
      </button>
    </div>
  )
}

export default App
