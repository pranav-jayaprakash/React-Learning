import React, { useContext } from 'react'
import {newcontext} from'./ContextHook'

function ContextAccess() {


    const display = useContext(newcontext)

    const {first,setfirst,object1,setobject1,array1,setarray1} = display

  return (

    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst('Second one')}>Change</button>
    </div>
  )
}

export default ContextAccess