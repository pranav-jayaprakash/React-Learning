import React, { useState } from 'react'


function Spreadtwo() {

    const [first, setfirst] = useState('Black')

    const Array = {color:'Candy Red'}

    const changecolor = ()=>{
        setfirst(Array.color)
    }


  return (
    <div>

        <h1>MY CAR IS BALENO , {first} IN COLOR</h1>
        <button onClick={changecolor}>Change</button>
        
    </div>
  )
}

export default Spreadtwo