import React, { useState } from 'react'
import { createContext } from 'react'

const newcontext = createContext()

function ContextHook({children}) {

    const [first, setfirst] = useState("Enjoy")

    const [object1, setobject1] = useState({name:'nandu'})

    const [array1, setarray1] = useState(['hello','hi','third'])


    


  return (

    <div>
        <newcontext.Provider value={{first,setfirst,object1,setobject1,array1,setarray1}}>
            {children}
        </newcontext.Provider>
    </div>
  )
}

export default ContextHook
export {newcontext}