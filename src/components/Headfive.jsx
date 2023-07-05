import React from 'react'
import './Headfive.css'
import { Button, Card } from 'react-bootstrap'

function Headfive() {
  return (
    <div>
        <div className='body-div'>

            <div className='Barista'>
                <h2>Barista Recommends</h2>
                <div className='viewmenu'>View Menu</div>
                <img src="https://www.starbucks.in/assets/icon/greyleafright.svg" alt="" className='right-img'/>

            </div>

        <div className='cardbox'>


            <div className='item1'>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQLT9ybc3zgaF0Z6V2ki7eGKvNx4c_wyAEg&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Cheesy Bacon Burger</Card.Title>
                    <Card.Text>
                    $7.99
                    </Card.Text>
                    <Button variant="success">Order Now</Button>
                </Card.Body>
                </Card>
                </div>

            <div className='item2'>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCVhPPTJVB1v4iUeTZqeWK1kbMPkFVy4tbA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Nugget Burger</Card.Title>
                    <Card.Text>
                    $5.99
                    </Card.Text>
                    <Button variant="success">Order Now</Button>
                </Card.Body>
                </Card>
                </div>
            <div className='item3'>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3BBK5k3ex89mWjJ6qfuEh5ny3qjTKZ6B3Q&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Hazelnut Triangle</Card.Title>
                    <Card.Text>
                    $3.99
                    </Card.Text>
                    <Button variant="success">Order Now</Button>
                </Card.Body>
                </Card>
                </div>
        </div>


        </div>
        <br />

        
    </div>
  )
}

export default Headfive