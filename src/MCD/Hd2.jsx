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
    {image:'https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_ROA_2336x1040v3.jpg',
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
    {image:`https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_RyC_CAMILO_2336x1040.jpg`,
    head:`Want to Experience Camilo Live? Vote Today!`,
    sb:`McDonald’s Ritmo y Color, a celebration of urban music, art and Latino culture, is proud to present an exclusive live concert experience featuring Grammy-nominated artist Camilo. Putting the power in the hands of fans nationwide, fans will be able to bring Camilo live to two cities from a choice of six venues: New York, San Antonio, Dallas, Chicago, San Jose or Miami. Vote now to bring Camilo to your city! Voting is open from June 27 to July 18, 2023.`,
    sm:``,
    btn:`Vote Now`},
    {image:`https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_Desktop_Deals-v1_1168x520.jpg`,
    head:`Deals for Days`,
    sb:`Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.`,
    sm:`*Mobile Order & Pay at participating McDonald’s.`,
    btn:`Get App Deals`}
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