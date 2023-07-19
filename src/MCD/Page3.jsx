import React from 'react'
import './Page1.css'
import './Hd2.css'
import './Page2.css'
import { Button } from 'react-bootstrap'

function Page3() {

    var ab=[{image:`https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1pub_FreeLargeFries_2336x1040.jpg`,
    head:`Free Large Fries Now. Even More Fries Later.`,
    sb:`Download the McDonald’s app and join MyMcDonald’s Rewards to get your free large Fries with $1 minimum purchase.* Plus, when you join MyMcDonald’s Rewards, you start earning points on every eligible order—points you can put towards more free food.`,
    sm:`*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. May take up to 48 hours to appear in your deals. Must opt in to MyMcDonald’s Rewards. Excludes tax.`,
    btn:`Get Free Fries in the App`},]


  return (
    <div>
        <div className='margin-div'>
        <h1 className='big'>Exclusive McDonald's Deals</h1>
        </div>

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

        <div className='parent-div'>
        <img src='https://s7d1.scene7.com/is/image/mcdonalds/1pub_FFF_2336x1040:2-column-desktop?resmode=sharp2' alt="" className='inline-img2'/>
        <div className='child-one'>
            <h1 className='hone'>Free Fries Friday</h1>
            <p className='size-big'>Get a free medium Fries with any $1 minimum purchase, only in the McDonald’s app.* Make it fry day with a friend.</p>
            <p className='size-sm'>*Must be opted into Rewards. Valid 1x each Friday thru 12/31/23 at participating McDonald’s. Excludes tax.</p>
            <Button  variant="warning">Get Free Fries in the App</Button>
        </div>
        </div>
    </div>
  )
}

export default Page3