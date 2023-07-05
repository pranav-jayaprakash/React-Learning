import React, { useState }  from 'react'
import { Button } from "react-bootstrap"

function Buttoncolor() {
    
  
    const [color, setcolor] = useState('black');

    const hbc = (newcolor) => {
      setcolor(newcolor);
    };
  
      
    
    
    
  return (
    <div>
        <h1 style={{color}}>The color is {color}</h1>
        <Button className='btn' onClick={()=>hbc("red")} variant="danger">Red</Button>
        <Button className='btn' onClick={()=>hbc("blue")}>Blue</Button>
        <Button className='btn' onClick={()=>hbc("green")} variant="success">Green</Button>
        <Button className='btn' onClick={()=>hbc("black")} variant="dark">Black</Button>
    </div>
  )
}

export default Buttoncolor