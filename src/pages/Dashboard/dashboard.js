import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import './dashboard.css';


function Dashboard() {

  const createProject =() =>{

  }

  return (
    <div>
      <Button onClick={createProject} >New Project</Button>
      <Container fluid="md" className='projectBox' style={{ height: "80vh"}}>
        <Row className='projectBox' >
          <Col lg={6} xs={12}>
          <div>
            <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
          </div>
          </Col>
          <Col lg={6} xs={12}>
          <div>
            <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard;