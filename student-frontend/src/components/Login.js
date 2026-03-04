import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    alert("Logged in as: " + email);
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input
        placeholder="Enter Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;