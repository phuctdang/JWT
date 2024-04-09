import { useState } from 'react'
import './App.css'
import SignUpForm from './Components/SignUpForm.jsx'
import Authenticate from './Components/Authenticate.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  )
}

export default App