import React from 'react'
import './Height.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

function Height() {

    var ab = [{image:'https://www.maccosmetics.in/media/export/cms/sch_studiofixpen_51761/studiofixpen_HPVTO_020623.jpg',title:'VIRTUAL TRY-ON',desc:'Swipe for 800+ styles'},
            {image:'https://www.maccosmetics.in/media/export/cms/sch_studiofixpen_51761/studiofixpen_HPTutorial_020623.jpg',title:'TUTORIALS',desc:'Explore how to create new looks everyday'},
        {image:'https://www.maccosmetics.in/media/export/cms/sch_studiofixpen_51761/studiofixpen_HPLivechat_020623.jpg',title:'LIVE CHAT',desc:"Chat live with an artist to find what's best for you"}]
  return (
    <div>
        <p className='monsoon2'>ONLINE SERVICES</p>

        <MDBRow className='row-cols-1 row-cols-md-3 g-4 mar'>

            {ab.map((display)=>
           
      <MDBCol>
        <MDBCard className='h-100'   alignment='left'>
          <MDBCardImage
            src={display.image}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{display.title}</MDBCardTitle>
            <MDBCardText className='desc'>
              {display.desc}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
       )}
    </MDBRow>

    </div>
  )
}

export default Height