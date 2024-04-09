import { useState } from 'react'

const SignUpForm = ({setToken, token}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          username,
          password
        })
      });
      const result = await response.json();
      setToken(result.token)
      console.log(result)
    } catch (error) {setError(error.message)}
  };

  return (
    <>
      <h2>Sign Up</h2>

      {error && <p>Error: {error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username <br/>
          <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </label>
        <br/>
        <label>
          Password <br/>
          <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <br/> <br/>
        <button>Submit</button>
      </form>
    </>
  )
};

export default SignUpForm;