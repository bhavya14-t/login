import React, { useState } from 'react';
import { LOGIN_MUTATION } from '../graphql/mutations';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("1234567989");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api-qa.seamasterai.com/graphql", 
        {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
          query: LOGIN_MUTATION, 
          variables: { 
            input: { 
              identifier: email,
               password, provider: "local",
               }, 
              },
             }),
        });
         const result = await res.json();

         if(result.data && result.data.login.jwt)   
         {
          localStorage.setItem("token", result.data.login.jwt); 
          localStorage.setItem("user", JSON.stringify(result.data.login.user));
          navigate("/dashboard");
        } else { setError("Invalid credentials or email not confirmed"); 
        }
    } catch (err) { 
      console.error(err);
      setError("Something went wrong during signup.");
     }
  };

  return (
  <div className="login-container">
   <form onSubmit={handleLogin} className="login-form"> <h2>Login</h2> <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <button type="submit">Login</button> <p style={{ marginTop: "10px" }}> Don't have an account? <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>Signup</span> </p> </form> </div>);
};

export default Login;
