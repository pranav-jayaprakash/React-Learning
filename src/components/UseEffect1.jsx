import React, { useEffect, useState } from 'react'

function UseEffect1() {


    const [first, setfirst] = useState('First')

    useEffect(() => {
      

        alert("Hello there")
    }, [first])

    function toggle() {
      setfirst(first === 'First' ? 'Second' : 'First');
    }
    
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={toggle}>Change</button>
    </div>
  )
}

export default UseEffect1