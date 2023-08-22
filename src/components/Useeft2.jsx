import React,{useEffect,useRef} from 'react'

function Useeft2() {


    const Sample1 = useRef()
   const Sample2 = useRef()


    useEffect(()=>{
        Sample1.current.style.backgroundColor='red'
        Sample2.current.style.fontsize='5em'

    },[])


    const display =()=>{
        Sample1.current.innerText='redone'
        Sample1.current.innerHTML='<h6>HElloo</h6>'
        console.log('hello')

    }
  return (
    <div>

        <div ref={Sample1}>
            
            <ul ref={Sample2}>
            <li>hello</li>
            <li>wassup</li>
            <li>have a nice day</li>
            </ul>
            <button onClick={display}>Click me</button>
        </div>
        
    </div>
  )
}

export default Useeft2