import React, { useState } from "react";
function Form(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [submittedData,setSubmittedData]=useState(null)
    const handelSubmit=(e)=>{
        e.preventDefault();
        const formdata={name,email,password}
        setSubmittedData(formdata);
        setName("");
        setEmail("");
        setPassword("");
        
    }
    return(
        <>
        <form onSubmit={handelSubmit}>
        <h1>Form</h1>
        <label>Name</label>
        <input type="text"
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        />
        <label>Email</label>
        <input type="email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
        </form>
        {submittedData && (
            <div>
                <h2>Submitted Data</h2>
                <p><strong>Name:</strong>{submittedData.name}</p>
                <p><strong>Email:</strong>{submittedData.email}</p>
                <p><strong>Password:</strong>{submittedData.password}</p>
            </div>
        )}
        </>
    )
}
export default Form;
