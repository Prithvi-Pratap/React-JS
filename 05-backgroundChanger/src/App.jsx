import { useState } from 'react'
import './App.css'
import ColorBlock from './colorBlocks.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="backdrop" ></div>
    <ColorBlockolorBlock color="red" />
    <ColorBlockolorBlock color="black" />
    <ColorBlockolorBlock color="blue" />
    <ColorBlockolorBlock color="orange" />
    </>
  )
}

export default App
