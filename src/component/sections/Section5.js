import React from 'react';
import './Section5.css';
import {Card , Button} from 'react-bootstrap'
const Section5 = () => {
  return (
    <div  id='sec5'>
    <Card style={{ width: '21rem' }} id='ccc'>
    <img src={require("../Photos/01.jpg")} alt='logo'/>
    <Card.Body>
      <Card.Title id='ww'>Rainbow Vegetable Sandwich</Card.Title>
      <Card.Text>
      Time: 15 - 20 Minutes | Serves: 1
      </Card.Text>
      <p>$10.50 <del>$11.70</del></p>
      <hr></hr>
      <Button>Order Now</Button>

    </Card.Body>
  </Card>

  <Card style={{ width: '21rem' }} id='aaa'>
  <img src={require("../Photos/02.jpg")} alt='logo'/>
  <Card.Body>
    <Card.Title id='ww'>Vegetarian Burger</Card.Title>
    <Card.Text>
    Time: 30 - 45 Minutes | Serves: 1
    </Card.Text>
    <p>$9.20 <del>$10.50</del></p>
    <hr></hr>
    <Button >Order Now</Button>
  </Card.Body>
</Card>

<Card style={{ width: '21rem' }} id='ddd'>
<img src={require("../Photos/03.jpg")} alt='logo'/>
<Card.Body>
  <Card.Title id='ww'>Raspberry Stuffed French Toast</Card.Title>
  <Card.Text>
  Time: 10 - 15 Minutes | Serves: 1
  </Card.Text>
  <p>$12.50 <del>$13.20</del></p>
  <hr></hr>
  <Button>Order Now</Button>
</Card.Body>
</Card>
    </div>
  )
}

export default Section5