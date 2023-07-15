import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./Heads.css"

function Heads() {
  return (
    <div>
        <Navbar bg="" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home"><img src="https://www.starbucks.in/assets/icon/logo.png" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" className='links'>Home</Nav.Link>
            <Nav.Link href="#gift" className='links'>Gift</Nav.Link>
            <Nav.Link href="#order" className='links'>Order</Nav.Link>
            <Nav.Link href="#pay" className='links'>Pay</Nav.Link>
            <Nav.Link href="#store" className='links'>Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Heads