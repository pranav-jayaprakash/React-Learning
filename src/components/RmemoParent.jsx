import React,{useState} from 'react'

function RmemoParent() {

    const [state, setstate] = useState(0)
    const [state1, setstate1] = useState(0)

    console.log("Parent rendered")


    const show=()=>{
        setstate(state+1)
    }

    const show1=()=>{
        setstate1(state1+1)
    }

  return (
    <div>
        <h1>{state}</h1>
        <h1>{state1}</h1>

        <button onClick={show}>Click</button>
        <button onClick={show1}>Click2</button>


        
    </div>
  )
}

export default RmemoParent