import React,{useReducer} from 'react'

function UseRdc() {

    const InitialState=0

    const reducer =(state,action)=>{

        switch (action.type) {
            case 'increase':
                return state= state+1
            case 'decrease':
                return state= state-1
            case 'increase2':
                return state= state+2
            case 'decrease2':
                return state= state-2
        }
    }

    const [state,dispatch] = useReducer(reducer,InitialState)
  return (
    <div>

        <h1>{state}</h1>

        <button onClick={()=>dispatch({type:'increase'})}>increase</button>
        <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
        <button onClick={()=>dispatch({type:'increase2'})}>increase</button>
        <button onClick={()=>dispatch({type:'decrease2'})}>decrease2</button>
        
    </div>
  )
}

export default UseRdc