import React from 'react'

import './Headthree.css'

function Headthree() {
  return (
    <div>

        <h2>Handcrafted Curations</h2>
        <br />
        <div className='flexdiv'>

        <div className='cardmargin'>
      <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg' alt='...' position='top' className='imgsize'/>
      <div className='paracolor'>
        <p>
        Bestseller
        </p>
      </div>
    </div>
        <div className='cardmargin'>
      <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg' alt='...' position='top' className='imgsize'/>
      <div className='paracolor'>
        <p>
        Drinks
        </p>
      </div>
    </div>
    
    <div className='cardmargin'>
      <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg' alt='...' position='top' className='imgsize'/>
      <div className='paracolor'>
        <p>
        Merchandise
        </p>
      </div>
    </div>
    
    <div className='cardmargin'>
      <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg' alt='...' position='top' className='imgsize'/>
      <div className='paracolor'>
        <p>
        Food
        </p>
      </div>
    </div>
    
    <div className='cardmargin'>
      <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg' alt='...' position='top' className='imgsize'/>
      <div className='paracolor'>
        <p>
        Coffee <br></br>At Home
        </p>
      </div>
    </div>
    
    <div className='cardmargin'>
      <img src='https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg' alt='...' position='top' className='imgsize'/>
      <div  className='paracolor'>
        <p>
        Ready <br />to Eat
        </p>
      </div>
    </div>

        </div>
    </div>
  )
}

export default Headthree