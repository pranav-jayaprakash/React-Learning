import React, { useEffect, useState } from 'react'
import axios from 'axios';


function AxioApi() {


    const [first, setfirst] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((display)=>{setfirst(display.data.products)})
    }, [])

    console.log(first)
    


 
  return (
    <div>
        {first.map((display)=>
        
        <h2>{display.title}</h2>
        )}
    </div>
  )
}

export default AxioApi