import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cards from './components/cards.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Cards title='Watch' price='$89.00' image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Cards title="Headphones" price="$49.00" image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Cards title="Sunglasses" price="$39.00" image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  </React.StrictMode>,
)
