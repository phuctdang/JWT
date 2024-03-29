import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JWT Authentication</h1>
      <form>
        <input type="submit"  />
      </form>
    </>
  )
}

export default App
