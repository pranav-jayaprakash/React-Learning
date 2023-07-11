import React, { useEffect, useState } from 'react'

function UseEffect1() {


    const [first, setfirst] = useState('first one')

    useEffect(() => {
      

        alert("Hello there")
    }, [first])
    
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst('Second one')}>Change</button>
    </div>
  )
}

export default UseEffect1