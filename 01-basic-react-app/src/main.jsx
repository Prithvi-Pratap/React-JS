import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    Children:'click me🥰'
}

//creating a react element using createElement
const anotherElement="another element";

const newElement=React.createElement(
    'a',
    //this attribute object is necessary,if no attributes ,then leave the object empty
    {
        href:'http://google.com',
        target:'_blank'
    },

    //text content
    'click me to go to google',
    //evaluated expression
    anotherElement
)
//use {variableName} to insert variables ,this {} consists only evaluated expression ,can't inject javascript, it expects only evaluated expression

ReactDOM.createRoot(document.getElementById('root')).render(
    // <h1>here we go, {NewElement}</h1>
    newElement
)
