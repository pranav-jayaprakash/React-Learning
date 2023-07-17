import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Hd2.css'

function Hd2() {

    var ab = [{image:'https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1pub_CheesyJalapenoQPC_2336x1040.jpg',
    head:'The New QPC®? It’s Got Some Bite',
    sb:'Just when you thought it was a regular Quarter Pounder®* with Cheese—it hits you w/ cheddar sauce, bacon and jalapeño. The new Cheesy Jalapeño Bacon QPC is 100% fresh beef^ cooked when you order—available as a single or double and only for a limited time. Get yours for pickup or McDelivery® in the app.+',
    sm:`*Weight before cooking 4 oz.
    ^Fresh Beef available at most restaurants in contiguous U.S. Not available in Alaska, Hawaii and U.S. Territories.
    +At participating McDonald's. Only in the app. App registration required. Must be opted in to MyMcDonald's Rewards.`,
    btn:'Try the New QPC'},
    ]
  return (
    <div>

       {ab.map((display)=>
        <div className='parent-div'>
        <img src={display.image} alt="" className='inline-img'/>
        <div className='child-one'>
            <h1 className='hone'>{display.head}</h1>
            <p className='size-big'>{display.sb}</p>
            <p className='size-sm'>{display.sm}</p>
            <Button  variant="warning">{display.btn}</Button>
        </div>
        
    </div>

       )}
    </div>
  )
}

export default Hd2