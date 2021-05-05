import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";


function Home() {
  return (
    <div className="backgroundDiv">
      <Container fluid="md">
        <Row>
          <Nav></Nav>
        </Row>
        <div className="inputform">
          <Form className='form'> 
            <Form.Group controlId="formBasicEmail" className='formtext'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className='formtext'>
              <Form.Label >Password</Form.Label>
              <Form.Control  type="password" placeholder="Password" />
            </Form.Group>
            <Button className='formtext' variant="secondary" type="submit">
              Sign in
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Home;
