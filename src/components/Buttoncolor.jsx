import React, { useState }  from 'react'
import { Button } from "react-bootstrap"

function Buttoncolor() {
    const [first, setfirst] = useState("None")

    


  return (
    <div>
        <h1>The color is {first}</h1>
        <Button onClick={()=>setfirst("Red")}  variant="danger">Red</Button>
        <Button onClick={()=>setfirst("Blue")}>Blue</Button>
        <Button onClick={()=>setfirst("Green")} variant="success">Green</Button>
        <Button onClick={()=>setfirst("Black")} variant="dark">Black</Button>
    </div>
  )
}

export default Buttoncolor