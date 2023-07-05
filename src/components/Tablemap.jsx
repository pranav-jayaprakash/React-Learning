import React from 'react'

function Tablemap() {

    var ab =[{id:1,name:'sasi',salary:20000},{id:2,name:'david',salary:25000},{id:3,name:'Joe',salary:27000},
    {id:4,name:'Noah',salary:22000},{id:5,name:'Zoey',salary:29000},{id:6,name:'Aria',salary:23000},]
  return (
    <div>


        <table>
        

            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Salary</th>
            </tr>
            {ab.map((display)=>
            <tr>
                <td>{display.id}</td>
                <td>{display.name}</td>
                <td>{display.salary}</td>
            </tr>
        )}
        </table>
    </div>
  )
}

export default Tablemap