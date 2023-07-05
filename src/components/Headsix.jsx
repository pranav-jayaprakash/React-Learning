import React from 'react'
import './Headsix.css'
import { Card } from 'react-bootstrap'

function Headsix() {
  return (
    <div>
        <div className='body-bottom'>
        <div className='Barista'>
                <h2 className='coffe'>Learn more about the world of coffee!</h2>
                <div className='viewmenu'>Discover More</div>
                

            </div>
        <div className='carddiv'>
            <Card className="bg-dark text-white">
      <Card.Img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/web_ab5a0057ab.jpg" alt="Card image" className='image-size'/>
      <Card.ImgOverlay>
        <Card.Title>The Art And Science Of Sampling Coffee.</Card.Title>
        <br />
        <br />
        <Card.Text>
          Explore the world of coffee sampling at Starbucks and uncover the art and science behind creating the perfect cup.
        </Card.Text>
        <br />
        <br />
        <Card.Text>
            Learn more.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
        </div>
        <br />
        <br />
        
    </div>
  )
}

export default Headsix