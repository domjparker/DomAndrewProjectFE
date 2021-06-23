import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dashboard() {
  return (
    <div>
      <Container fluid="md">
        <Row style={{ backgroundColor: "orange" }}>
          <Col lg={6} xs={12}>
          <div>
            <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
          </div>
          </Col>
          <Col lg={6} xs={12}>

          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Dashboard;