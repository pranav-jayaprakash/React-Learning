import React, { useState } from 'react'
import Props2 from './Props2'

function Props1() {

    const single = {name:"nandu",age:23}
    const array = [{name:"Vishal",age:19},{name:"Tyaga",age:24}]
    
    const [first, setfirst] = useState(array)

  return (

    <div>
        <Props2 single={single} first={first} setfirst={setfirst}/>
    </div>
  )
}

export default Props1