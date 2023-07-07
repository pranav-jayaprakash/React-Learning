import React from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  import './Hseven.css'

function Hseven() {

    var ab = [{image:'https://www.maccosmetics.in/media/export/cms/sch_valentines_48369/lips.jpg',title:'LIPS'},
                {image:"https://www.maccosmetics.in/media/export/cms/mac_emea_feb_2022/4-Cross_face_desk_598x598.jpg",title:"FACE"},
            {image:'https://www.maccosmetics.in/media/export/cms/sch_hyperreal_48187/skin.jpg',title:'SKIN'},
        {image:'https://www.maccosmetics.in/media/export/cms/mac_emea_mar_2022/4-Cross_macstack_desk_598x598.jpg',title:'EYES'}]
  return (
    <div>
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
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
            <MDBCardText className='shop'>
              SHOP NOW
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
            )}
    </MDBRow>
    </div>
  )
}

export default Hseven