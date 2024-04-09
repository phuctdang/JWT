import { useState } from "react";

const Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [displayUsername, setDisplayUsername] = useState('?');

  const handleClick = async() => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      const result = await response.json();
      setSuccessMessage(result.message);
      setDisplayUsername(result.data.username);
      console.log(result)
    } catch (error) {setError(error.message)}
  };

  return (
    <>
      <h2>Authenticate</h2>

      {error && <p>Error: {error}</p>}

      <button onClick={handleClick}>Authenticate Token</button>
      <br/> <br/>
      {successMessage}
      <br/>
      <p>Username: {displayUsername}</p>
    </>
  )
};

export default Authenticate;