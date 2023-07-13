import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

import axios from 'axios';

function AxiosCard() {

    const [first, setfirst] = useState([])

    useEffect(() => {
      
        axios.get('https://dummyjson.com/products').then((display)=>{setfirst(display.data.products)})
    }, [])
    

  return (
    <div>

        
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

        {first.map((display)=>
        <MDBCol>
        
          <MDBCard className='h-100'>
          <MDBCarousel showControls showIndicators>
          {first.map((display)=>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={display.images}
                alt='...'
            />
          )}

          
            </MDBCarousel>
            <MDBCardBody>
              <MDBCardTitle>{display.title}</MDBCardTitle>
              <MDBCardTitle>
              {display.brand}
              </MDBCardTitle>
              <MDBBtn href='#'>Buy now</MDBBtn>
            </MDBCardBody>
          </MDBCard>

       
        </MDBCol>

        )}

      </MDBRow>
   
    </div>
  )
}

export default AxiosCard