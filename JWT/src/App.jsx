import { useState } from 'react'
import './App.css'
import SignUpForm from './Components/SignUpForm.jsx'
import Authenticate from './Components/Authenticate.jsx'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App