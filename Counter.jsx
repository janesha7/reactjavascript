import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count,setCount]=useState(0);
    let incre=()=>{
        setCount(count+1)

    }
    let decre=()=>{
        setCount(count-1)

    }
    let reset=()=>{
        setCount(0)

    }
  return (
    <>
    <h2>Counter-app</h2>
    <p>{count}</p>
    <button onClick={incre}>Increment</button>
    <button onClick={decre}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter;
