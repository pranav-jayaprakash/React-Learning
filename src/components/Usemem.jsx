import React,{useMemo,useState} from 'react'

function Usemem() {

    const [state, setstate] = useState(0)
    const [state1, setstate1] = useState(0)

    const display=()=>{
        setstate(state+1)
    }

    const display1=()=>{
        setstate1(state1+1)
    }

    const isevn =useMemo(()=>{
        let i =0
        while(i<10000000000)
        i++
    return state%2==0
    },[state])





  return (
    <div>
        <button onClick={display}>{state}</button>
        <span>{isevn?'even':'odd'}</span>
        <button onClick={display1}>{state1}</button>
        
    </div>
  )
}

export default Usemem