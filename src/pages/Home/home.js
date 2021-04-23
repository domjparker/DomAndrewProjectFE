import React from 'react';
import './home.css'
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <div className="backgroundDiv">
      <Container fluid="md">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <p>Hello world</p>
      <Button variant="primary">Primary</Button>{' '}
      {/* <img src={Img} alt='Background' className='bgimg'/> */}
    </div>
  )
}

export default Home;