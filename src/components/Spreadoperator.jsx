import React, { useState } from 'react'

function Spreadoperator() {

    const [first, setfirst] = useState([{name:"Bmw",Price:"12"},{name:"Audi",Price:"22"},{name:"Nissan",Price:"18"}])

    const Array=[{name:"Toyota",Price:"8"},{name:"Aston",Price:"32"}]

    const addcar = ()=>{
        setfirst([...first,...Array])
    }
  return (
    <div>
        <table>
            <tr>
            <th>Car</th>
            <th>Price</th>
            </tr>

            {first.map((display)=>
            <tr>
                    <td>{display.name}</td>
                    <td>{display.Price}</td>
            </tr>
            
            )}
            
        </table>

        <button onClick={addcar}>Add more</button>
    </div>
  )
}

export default Spreadoperator