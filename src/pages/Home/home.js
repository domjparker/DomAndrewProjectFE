import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignIn from '../../features/signIn/SignIn';

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
            <SignIn />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
