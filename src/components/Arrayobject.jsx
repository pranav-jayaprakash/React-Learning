import React from 'react'

function Arrayobject() {

    var ab = [{id:1,name:"sasi"},{id:2,name:"sarath"},{id:3,name:"appu"}]


  return (
    
    <div>
        {ab.map((display)=>
        <>
        <h3>{display.id} {display.name}</h3>
        </>
        )}
    </div>
  )
        }

export default Arrayobject