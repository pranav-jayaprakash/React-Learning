import React from 'react'
import { useParams } from 'react-router-dom'

function Useparams() {

const {username} = useParams();
  return (
    <div>
        <h1>Username is {username}</h1>
    </div>
  )
}

export default Useparams