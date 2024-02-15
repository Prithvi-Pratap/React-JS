import { useState } from 'react'
import './App.css'

function App() {

  let [counter,SetCounter] =useState(15)//can give any default value

  // let counter=15;
     
  const incCounter=()=>{
    counter=counter+1;
    SetCounter(counter);//set the updated state
    console.log('clicked.',counter)
  }

  const decCounter=()=>{
    // counter=counter-1;
    SetCounter(counter-1);
    console.log("clicked.",counter)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value {counter}</h2>

     <button onClick={incCounter} >Add Value {counter}</button>
     <br />
     <button onClick={decCounter}>remove value {counter}</button>
    </>
  )
}

export default App
