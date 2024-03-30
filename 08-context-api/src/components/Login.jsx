import { useState } from "react";
import { useContext } from "react";
import UserContextProvider from "../context/UserContextProvider";
import { userContext } from "../context/UserContext";
export default function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    
    const {setUser}=useContext(userContext);

    const handleClick = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

    return (

        <>
        <h2>Login to continue</h2>
        <input type="text" 
        value={username}  
        placeholder="username or email"
        onChange={(e)=>setUsername(e.target.value)}
        />
        {"  "}
        <input type="password" 
        value={password} 
        placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        {" "}
        <button onClick={handleClick}>Submit</button>
        </>
        
    )
}