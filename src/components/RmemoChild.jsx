import React from 'react'

function RmemoChild({state}) {

    console.log("Child Rendered")
  return (
    <div>
        <h1>{state}</h1>
    </div>
  )
}

export default RmemoChild
export const MChild =React.memo(RmemoChild)