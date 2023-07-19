import React from 'react'
import './Page1.css'
import './Hd2.css'
import './Page2.css'
import { Button } from 'react-bootstrap'

function Page4() {


  return (
    <div>
        
        <div className='margin-div'>
        <h1 className='big'>About Our Food</h1>
        <br />

        
        <img src="https://s7d1.scene7.com/is/image/mcdonalds/About_Our_Food_Hero_1260x560_Desktop:hero-desktop?resmode=sharp2" alt="" className='imagesize'/>
        
        </div>
        <div className='margin-div'>
            <h1 className='big2'>We’re Passionate About Our Food</h1>
            <p className='para'>From adding more balanced options to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food. </p>
       </div>


    </div>
  )
}

export default Page4