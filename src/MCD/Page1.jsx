import React from 'react'
import './Page1.css'
import './Hd2.css'
import { Button } from 'react-bootstrap'

function Page1() {

    var ab=[{image:'https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_ROA_2336x1040v3.jpg',
    head:'New: Faster Faves, Only in the App',
    sb:'We now prep when you’re on the way if you choose Curbside, Front Counter—or dine in for Table Service. Just order ahead in the app to save time. Because waiting in line for faves? Not our thing either.*',
    sm:`*At participating McDonald’s.`,
    btn:'Order Ahead in the App'},
    {image:'https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1pub_McDeliveryintheApp_Launch_2336x1040_v3.jpg',
    head:`Score Free Food with McDelivery®`,
    sb:`Earn MyMcDonald’s Rewards points on every McDelivery order only in the McD’s app to redeem for free food. And, yup, you can get ‘em delivered, too. Just order, relax and enjoy—check out how easy ordering delivery is in the app.*`,
    sm:`*At participating McDonald's. Only in the app. App registration required. Must be opted into MyMcDonald's Rewards.`,
    btn:`Earn Points With McDelivery`},
    {image:`https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1pub_FreeLargeFries_2336x1040.jpg`,
    head:`Free Large Fries Now. Even More Fries Later.`,
    sb:`Download the McDonald’s app and join MyMcDonald’s Rewards to get your free large Fries with $1 minimum purchase.* Plus, when you join MyMcDonald’s Rewards, you start earning points on every eligible order—points you can put towards more free food.`,
    sm:`*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. May take up to 48 hours to appear in your deals. Must opt in to MyMcDonald’s Rewards. Excludes tax.`,
    btn:`Get Free Fries in the App`},
    {image:`https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_PaypalVenmo_v2_2236x1040.jpg`
    ,head:`Now More Ways to Pay for Faves`,
    sb:`Get faves fast with Mobile Order & Pay* in the app. Use your preferred debit or credit card, Apple Pay, Google Pay™, PayPal or Venmo.`,
    sm:`*McDonald’s app download and registration required. Mobile Order & Pay available at participating McDonald’s.`,
    btn:`Order in the App`}]

  return (

    <div>
        <div className='margin-div'>
        <h1 className='big'>McDonald's App</h1>
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

       <div className='margin-div'>
            <h1 className='big2'>Deals and Much More</h1>
            <p className='para'>With the McDonald’s app, you’ll get access to exclusive deals. Use the app to order ahead and pass the line with Mobile Order & Pay plus join MyMcDonald’s Rewards to earn points on every order to redeem for free McDonald's.</p>
       </div>
    </div>
  )
}

export default Page1