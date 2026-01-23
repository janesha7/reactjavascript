import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color,setcolor]=useState("white")
  
  return (
    <>
      <div>
        <h2>Color picker</h2>
        <button className='bt1'onClick={()=>setcolor('brown')}>BROWN</button>
        <button className='bt2'onClick={()=>setcolor('coral')}>CORAL</button>
        <button className='bt3'onClick={()=>setcolor('blueviolet')}>BLUEVIOLET</button>
        <div className='color-box' style={{backgroundColor:color}}></div>
        
      </div>
      
    </>
  )
}

export default App

index//


.bt1{
  background-color:brown;
  padding: 10px;
  border:none ;
  width: 65px;
  border-radius: 10px;
  margin: 0 10px;
}

.bt2{
  background-color:coral;
  padding: 10px;
  border:none ;
  width: 60px;
  border-radius: 10px;
  margin: 0 10px;
}
.bt3{
  background-color:blueviolet;
  padding: 10px;
  border:none ;
  width: 95px;
  border-radius: 11px;
  margin: 0 10px;
}
.color-box{
  height: 100px;
  width: 100px;
  border: 6px solid;
  margin-left: 450px;
  margin-top: 20px;

}
