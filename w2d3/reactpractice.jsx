import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function onClick()
  {
   alert=("Maham")
   return(alert);
  }
  return (
    <>
     <h1>Maham Hadi</h1>
     <button onClick={alert}> check name</button>
    </>
  )
}

export default App