import React from 'react'
import './Hfive.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Hfive() {
    var ab= [{image:'https://sdcdn.io/mac/in/mac_sku_STXK90_1x1_2.png?width=1080&height=1080',title:"VIVA GLAM BHUMI PEDNEKAR: POWDER KISS LIPSTICK",price:'₹ 2,200.00'}
  ,{image:'https://sdcdn.io/mac/in/mac_sku_NYA811_1x1_0.png?width=1080&height=1080',title:'STUDIO FIX EVERY-WEAR ALL-OVER FACE PEN',price:'₹ 2,850.00'},
{image:'https://sdcdn.io/mac/in/mac_sku_SRH902_1x1_0.png?width=1080&height=1080',title:'M·A·C LOCKED KISS INK 24HR LIPCOLOUR',price:'₹ 2,900.00'},
{image:'https://sdcdn.io/mac/in/mac_sku_SYM601_1x1_0.png?width=1080&height=1080',title:'HYPER REAL SERUMIZER™ SKIN BALANCING HYDRATION SERUM',price:'₹ 5,900.00'},
{image:'https://sdcdn.io/mac/in/mac_sku_STXK90_1x1_2.png?width=1080&height=1080',title:"VIVA GLAM BHUMI PEDNEKAR: POWDER KISS LIPSTICK",price:'₹ 2,200.00'}
  ,{image:'https://sdcdn.io/mac/in/mac_sku_NYA811_1x1_0.png?width=1080&height=1080',title:'STUDIO FIX EVERY-WEAR ALL-OVER FACE PEN',price:'₹ 2,850.00'},]
  return (
    <div>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {ab.map((display)=>
      <MDBCol>
      
        <MDBCard className='h-100'  alignment='center'>
          <MDBCardImage
            src={display.image}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{display.title}</MDBCardTitle>
            <MDBCardText>
              {display.price}
            </MDBCardText>
            <MDBBtn color='dark'>BUY NOW</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      
      </MDBCol>
      )}
    </MDBRow>
    </div>
  )
}

export default Hfive