import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carouselmap() {

    var ab = [{image:'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600',title:'One',para:'helloooooooooooooo'},
    {image:'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600',title:'two',para:'second page'},
    {image:'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600',title:'three',para:'third one'}]

  return (

    
    <div>
        
        
        <Carousel>
        {ab.map((display)=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{display.title}</h3>
          <p>{display.para}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      )}
    </Carousel>
        
    </div>
  )
}

export default Carouselmap