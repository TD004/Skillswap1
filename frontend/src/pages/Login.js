import { useState } from "react";
import axios from "axios";

function Login() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        { username,password }
      );

      localStorage.setItem("token", res.data.access);
      window.location.href="/dashboard";

    } catch {
      alert("Login failed");
    }
  };

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>SkillSwap Login</h2>

      <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
      <br/><br/>

      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <br/><br/>

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
