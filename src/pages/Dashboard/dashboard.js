import React from 'react';
import ListOfProjects from '../../features/listOfProjects/ListOfProjects';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Scroll from '../../components/Scroll/scroll';
import './dashboard.css';


function Dashboard() {

  const createProject =() =>{

  }

  return (
    <div className='dashBackground'>
    
      <Container fluid="md" className='projectBox' style={{ height: "80vh"}}>
        <Row className='newProjectButton'> 
          <Col lg={6} xs={12}>
          <Button onClick={createProject} >New Project</Button>
          </Col>
        </Row>
        <Scroll>
        <ListOfProjects />
        </Scroll>
        {/* <Row className='projectDiv' >
          <Col lg={6} xs={12}>
          <div>
            <h3 style={{ backgroundColor: "lightblue" }}>Active Projects</h3>
            <ul>
              <li> project title</li>
            </ul>
          </div>
          </Col>
          <Col lg={6} xs={12}>
          <div>
            <h2 style={{ backgroundColor: "lightblue" }}>Closed Projects</h2>
            <ul>
              <li> project title</li>
            </ul>
          </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default Dashboard;