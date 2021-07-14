import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignIn from '../../features/signIn/SignIn';
import SignUp from '../../features/signUp/SignUp';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { toggleSignInShowing , selectIsSignInShowing } from './homePageSlice';

function Home() {
  const signInShowingState = useSelector(selectIsSignInShowing);
  console.log("signInShowingState", signInShowingState)
  const dispatch = useDispatch();

  // let signInOrSignUp;
  // if (!signInShowingState) {
  //   signInOrSignUp = <SignUp />;
  // } 
  // else {
  //   signInOrSignUp = <SignIn />;
  // }

  const showSignInForm = () => {
    // if (signInShowingState === false) {
      dispatch(toggleSignInShowing(true))
    // }
  }

  const showSignUpForm = () => {
    // if (signInShowingState === true) {
      dispatch(toggleSignInShowing(false))
    // }
  }

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
            <div className="sign-in-div">
              <Row id="sign-in-buttons">
                <Button onClick={showSignInForm} variant="primary">Sign In</Button>
                <Button onClick={showSignUpForm} variant="primary">Sign Up</Button>
              </Row>
              {signInShowingState ? <SignIn /> : <SignUp /> }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
