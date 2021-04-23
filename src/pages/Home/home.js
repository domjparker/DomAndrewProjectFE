import React from 'react';
import Img from '../../image/homepage.jpg';
import './home.css'
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <div className="backgroundDiv">
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Sign In</Nav.Link>
    </Nav.Item>
  </Nav>
      <Container fluid="md">
        <Row>
          <Col />
        </Row>
      </Container>
      <p>Hello world</p>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  )
}

export default Home;