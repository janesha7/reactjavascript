import React, { useEffect, useState } from 'react'

const UserData = () => {
    const[user,setUser]=useState([])
    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json()) //convert the data
        .then((data)=>setUser(data)) // to pass the data
        //.catch((err)=>err)
    })
  return (
    <div className='container'>
        <h1 className='title'>User Details</h1>
        <div>
            {user.map((Details)=>(
                <div key={user.id}>
                    <p>Name:{Details.name}</p>
                    <p>Email:{Details.email}</p>
                </div>
            ))}
        </div>
    </div>

  )
}

export default UserData
