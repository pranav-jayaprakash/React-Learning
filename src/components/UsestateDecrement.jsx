import React, { useState } from 'react'

function UsestateDecrement() {
    const [first, setfirst] = useState(0)


function Decrement(){
    if (first<=0) {
        alert("cant");
        
    }
    else {
        setfirst(first-1);
    }
}
    
  return (
    <div>
        <h1>Value is {first}</h1>
        <button onClick={()=>setfirst(first+1)}>Increase</button>
        <button onClick={Decrement}>Decrease</button>

    </div>
  )
  
}

export default UsestateDecrement