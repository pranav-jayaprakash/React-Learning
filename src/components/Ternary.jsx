import React, { useState } from 'react'

function Ternary() {

    const [hide, sethide] = useState(false);

    const click = ()=> {
        sethide((open)=>! open)
    }
  return (
    <div>
        {hide?"Its open":""}
        <button onClick={click}>{hide?"hide":"show"}
        </button>
    </div>
  )
}

export default Ternary