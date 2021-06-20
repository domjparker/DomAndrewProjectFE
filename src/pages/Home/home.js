import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Home() {
  return (
    <div className="backgroundDiv">
      <Container fluid="md">
        <Row className="main-row">
          <Col lg={8} xs={12}>
            <div className="app-title">
              <h1>App Title</h1>
            </div>
          </Col>
          <Col lg={4} xs={12}>
            <div className="input-form">
              <Form className="form">
                <Form.Group controlId="formBasicEmail" className="form-text">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="form-text">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="form-text" variant="secondary" type="submit">
                  Sign in
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
