import React, { useState } from "react"; import { useNavigate } from "react-router-dom"; import { SIGNUP_MUTATION } from "../graphql/mutations";

const Signup = () => { const [username, setUsername] = useState(""); const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const navigate = useNavigate();

const handleSignup = async (e) => { e.preventDefault(); try { const res = await fetch("https://api-qa.seamasterai.com/graphql", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: SIGNUP_MUTATION, variables: { input: { username, email, password, role: "sailor", confirmed: true, }, }, }), }); const result = await res.json(); if (result?.data?.register?.jwt) { alert("Signup successful. Please login."); navigate("/"); } else { alert("Signup failed: " + result?.errors?.[0]?.message); } } catch (err) { alert("Signup failed"); } };

return ( <div className="login-container"> <form onSubmit={handleSignup} className="login-form"> <h2>Sign Up</h2> <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /> <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <button type="submit">Signup</button> <p style={{ marginTop: "10px" }}> Already have an account? <span onClick={() => navigate("/")} style={{ color: "blue", cursor: "pointer" }}>Login</span> </p> </form> </div> ); };

export default Signup;
