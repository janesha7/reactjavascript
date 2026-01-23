import { useState,useEffect } from 'react'

function App() {
  const [greeting,setGreeting]=useState("");
  useEffect(()=>{
    let hour=new Date().getHours().toString().padStart(2,0)
    let min=new Date().getMinutes().toString().padStart(2,0)
    let secs=new Date().getSeconds().toString().padStart(2,0)

    if(hour<12){
      setGreeting(`Goodmorning ${hour}:${min}:${secs}`)
    }
    else if(hour>=12&&hour<=17){
      setGreeting(`Goodaternoon ${hour}:${min}:${secs}`)
    }
    else if(hour>=17&&hour<=20){
      setGreeting(`Goodevening  ${hour}:${min}:${secs}`)
    }
    else {
      setGreeting(`GoodNight ${hour}:${min}:${secs}`)
    }
  },[]);
  return (
    <>
      <div>
        {greeting}
      </div>
      
    </>
  )
}

export default App
