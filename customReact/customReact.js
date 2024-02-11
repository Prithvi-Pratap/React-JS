function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children

    //manually set two attributes

    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement);
    
    //to set all the attributes
    for (const prop in reactElement.props) {
        if(prop==='children') continue; //to ignore children inside the properties if any
        domElement.setAttribute(prop,reactElement.props[prop]);
        container.appendChild(domElement);
    }

}

const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    Children:'click me🥰'
}

const mainContainer=document.getElementById("root")

customRender(reactElement,mainContainer)