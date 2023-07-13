import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

function CarouselMap() {

  const first = ['https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=600']
  return (
    <div>
        <Carousel>
        {first.map((display)=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display}
          alt="First slide"
        />
      </Carousel.Item>
        )}
      
    </Carousel>

    </div>
  )
}

export default CarouselMap