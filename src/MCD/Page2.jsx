import React from 'react'
import './Page1.css'
import './Hd2.css'
import './Page2.css'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Page2() {

    var ab=[{image:`https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1pub_FreeLargeFries_2336x1040.jpg`,
    head:`Free Large Fries Now. Even More Fries Later.`,
    sb:`Download the McDonald’s app and join MyMcDonald’s Rewards to get your free large Fries with $1 minimum purchase.* Plus, when you join MyMcDonald’s Rewards, you start earning points on every eligible order—points you can put towards more free food.`,
    sm:`*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. May take up to 48 hours to appear in your deals. Must opt in to MyMcDonald’s Rewards. Excludes tax.`,
    btn:`Get Free Fries in the App`},]

    var qs=[
        {title:'What Do I Have to Do to Earn Points?',
        desc:`Earning rewards points is very easy, simply download our app and agree to participate in MyMcDonald’s Rewards. Present the 4-digit code before ordering, or get points automatically when you order in the app.`},
        {title:'How Much Are Points Worth?',
        desc:`For every dollar you spend on eligible products, you will receive 100 points. You can start redeeming your MyMcDonald’s Rewards when you have 1500 points.`},
        {title:'Do My Points Expire?',
        desc:`Unfortunately, nothing can last forever. Your points will expire on the first day of the month after the sixth month from the day your points were earned. Plenty of time to save up for your favorite!`},
        {title:'Can I Get More Than One Reward at a Time?',
        desc:`At this time, you are limited to redeeming one reward per order. `},
        {title:'Can I Share My Points?',
        desc:`Your MyMcDonald's Rewards points are yours alone. Once you have your food, it’s up to you whether you want to share!`},
        {title:'How Do I Redeem Points for Free McDonald’s?',
        desc:`You can redeem with contactless mobile ordering in the McDonald's app by selecting Rewards, choosing the favorite you want to redeem and choosing “Add to Mobile Order”. To redeem in store or Drive Thru, select rewards and choose the item you want to redeem, then choose “Use at Restaurant” to get the 4-digit code you can provide the crew before you start ordering. For delivery orders placed using the McDonald’s app, select your reward item and add that to your McDelivery order. Rewards cannot be redeemed for delivery orders placed with a third party operator such as DoorDash and Uber Eats.`},]
  return (
    <div>
        <div className='margin-div'>
        <h1 className='big'>MyMcDonald’s Rewards</h1>
        <br />
        <p className='para'>With the McDonald’s app, you can earn points on every order to redeem for free McDonald's. Plus, get access to exclusive daily deals, easily re-order faves and select convenient pickup options with Mobile Order & Pay.</p>
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
            <h1 className='big2'>How to Earn Points and Redeem Faves</h1>
            <p className='para'>Order like a pro––all it takes is one code or one scan to earn MyMcDonald’s Rewards points, quickly pay and redeem your favorites.</p>
       </div>

       <div className='margin-div'>
       <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/3PUB_EARNPOINTS_376x376.jpg" />
        <Card.Body>
          <Card.Title className='titl'>Easily Earn Points</Card.Title>
          <Card.Text className='textcolor'>
          Select the ‘Earn Points’ tab in the McDonald's app found on the bottom menu bar. Access the 4-digit Drive Thru Code or code to scan at the counter or kiosk. When you place your order in the app, you'll automatically earn your points.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/3PUB_OneCode_Redeem_376x376.jpg" />
        <Card.Body>
          <Card.Title className='titl'>Pay & Earn All in One Step</Card.Title>
          <Card.Text className='textcolor'>
          Link your card details to the app so you can conveniently pay and earn points at the same time—including an extra 1500 Bonus Points on your first payment using your linked card. Then, simply tell us your Drive Thru code before placing your order at the speaker or scan the code in-restaurant.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">*Bonus points may take up to 10 days to appear in your account. Rewards program available only at participating McDonald's. McDonald's app download and registration required.</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/3PUB_EarnandRedeem_Redeem_376x376.jpg" />
        <Card.Body>
          <Card.Title className='titl'>Redeem Free McDonald’s</Card.Title>
          <Card.Text className='textcolor'>
          Go to the Rewards & Deals tab. There you can select the menu item you want to redeem. Choose ‘Use at Restaurant’ to get the Drive Thru code, or select ‘Use Restaurant Code’ when you’re inside to reveal the code to use at the counter or kiosk.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
       </div>


       <div className='margin-div'>
            <h1 className='big2'>Frequently Asked Questions</h1>
            {qs.map((disp)=>
            <>
            <p className='big3'>{disp.title}</p>
            <p className='para'>{disp.desc}</p>
            </>
            )}
            </div>
    </div>
  )
}

export default Page2