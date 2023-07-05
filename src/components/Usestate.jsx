import React, { useState } from 'react'

function Usestate() {
    const [first, setfirst] = useState("Hello")
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst("Updated")}>Update</button>
    </div>
  )
}

export default Usestate