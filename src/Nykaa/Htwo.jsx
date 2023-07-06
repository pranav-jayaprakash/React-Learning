import React from 'react'
import './Htwo.css'

function Htwo() {

    var ab= [{item:'LOCKED KISS INK'},{item:'STUDIO FIX'},{item:'BEST-SELLERS'},{item:'NEW'},{item:'LIPS'},{item:'FACE'},{item:'EYES'},{item:'MINI'},
    {item:'SKINCARE'},{item:'OFFERS'},{item:'EXPLORE'},{item:'SERVICES'},]
  return (
    <div>
        <ul className='headtwo'>
        {ab.map((display)=>
            <li className='headline'>{display.item}</li>

        )}
        </ul>
    </div>
  )
}

export default Htwo