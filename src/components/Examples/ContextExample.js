import React,{ useContext } from "react"
 
let context1=React.createContext(null);
export function Child1a(){
    const context=useContext(context1);
    return(
        <>
        <h6>child of First Child</h6>
        <p>{context.age}</p>
        </>
    )
}
export function Child1(){
    const context=useContext(context1);
    return(
        <>
       <h3>child of Parent Component</h3>
       <p>{context.name}</p>
       <Child1a/>
        </>
    )
}
export default function Parent(){

    return(
        <>
        <h1>Main page</h1>
        <context1.Provider value={{name:"vinit",age:"23"}}>
           <Child1/>
        </context1.Provider>
        </>
    )
}