import React from 'react'
import Propschild from './Propschild'


function Propsparent() {

    const ob = {name:'Hello',age:24}
  return (

    
    <div>
        <Propschild ob={ob}/>
    </div>
  )
}

export default Propsparent