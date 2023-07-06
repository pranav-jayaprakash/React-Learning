import React from 'react'

function Props2({single,first,setfirst}) {


  return (
    <div>
        {first.map((display)=>(
        <h2>{display.name} and {display.age}</h2>
        ))}
    </div>
  )
}

export default Props2