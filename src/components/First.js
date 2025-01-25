import React, { useState } from 'react';

export default function First(props) {
    //setting props as state
    const [con,setContent]=useState({name:props.name,color:props.color});
    const btnClick=()=>{
        setContent({
            name:con.name==="Click"?"Clicked ✓":"Click",
            color:con.color==="warning"?"success":"warning",
        });
       
    }
  return (
    <div>
    <h5>Welcome page First page</h5>
    <div>
        {/* printing properties that are taken from state */}
    <button type="button" className={`btn btn-${con.color}`} onClick={btnClick}>{con.name}</button>
    </div>
  </div>
  )
}
 //setting default props
 First.defaultProps={
 name:"Button",color:"primary"        
  }
