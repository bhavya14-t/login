import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => 
  { const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); const navigate = useNavigate();

const handleLogin = async (e) => 
  { e.preventDefault(); 
    try {
       const res = await fetch("https://api-qa.seamasterai.com/graphql", 
        { method: "POST", headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ query: LOGIN_MUTATION, variables: { input: { identifier: email, password, provider: "local", }, }, }), }); const result = await res.json(); const token = result?.data?.login?.jwt; if (token) { localStorage.setItem("token", token); navigate("/dashboard"); } else { alert("Invalid credentials or email not confirmed"); } } catch (err) { alert("Login failed"); } };

return ( <div className="login-container"> <form onSubmit={handleLogin} className="login-form"> <h2>Login</h2> <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <button type="submit">Login</button> <p style={{ marginTop: "10px" }}> Don't have an account? <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>Signup</span> </p> </form> </div> ); };

export default Login;
