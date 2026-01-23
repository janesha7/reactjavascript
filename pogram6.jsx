import React, { useState } from "react";
function Calculator(){
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    const a=Number(num1)
    const b=Number(num2)
    return(
        <>
        <h1>Calculator</h1>
        <input type="number"
        placeholder="Enter the value1" 
        value={num1}
        onChange={(e)=>setNum1(e.target.value)}
        />
        <input type="number"
        placeholder="Enter the value2"
        value={num2}
        onChange={(e)=>setNum2(e.target.value)}
         />
        <div 
        style={{height:"250px",
        width:"250px",
        border:"1px solid",
        marginLeft:"100px",
        marginTop:"20px",
        background:"lightpink"
        }}>
            <p><strong>Additon:</strong>{a+b}</p>
            <p><strong>Sub:</strong>{a-b}</p>
            <p><strong>Multiply:</strong>{a*b}</p>
            <p><strong>Division:</strong>{b==0 ? "cannot be divide by zero":a/b}</p>



        </div>
        </>
    )
}
export default Calculator
