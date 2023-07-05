import React from 'react'
import './Headfour.css'


function HeadFour() {
  return (
    <div>
       
       <div className='carousel-cont'>
       
       <div className='image-div'>
            <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Mocha_Banner_1_bb717aa4df.png" alt="" className='thumb'/>
       </div>
       <div className='content-div'>
        <p className='common'>Craving perfection?</p>
        <h5 className='black'>Mocha Cookie Latte</h5>
        <p className='common'>Tempt your taste buds with the perfect combination of velvety mocha 
        and irresistable cookie crumbles.</p>

        <p className='common'>
            Starting From <br />

            <span className='common-small'>$4.99</span>

        </p>

       </div>
        <div className='button-div'>

                    Order Now
        

       </div>

    </div>
    
    </div>

    
  )
}

export default HeadFour