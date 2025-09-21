import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>count:{count}</h1>
      <button className="btn"onClick={()=>setCount(count-1)}>dicriment (-)</button>
      <button className="btn"onClick={()=>setCount(count+1)}>Incriment (+)</button>
      <button className="btn"onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
   
}

export default App
