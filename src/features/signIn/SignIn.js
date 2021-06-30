import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, selectEmail, setPassword, selectPassword } from './signInSlice';

function SignIn() {

  const emailState = useSelector(selectEmail);
  const passwordState = useSelector(selectPassword);

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  }

  const handlePassword = (event) => {
    dispatch(setPassword(event.target.value));
  }

  return (
    <div className="input-form">
      <Form className="form">
        <Form.Group controlId="formBasicEmail" className="form-text">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => handleEmailChange(event)} value={emailState} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="form-text">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => handlePassword(event)} value={passwordState} />
        </Form.Group>
        <Button className="form-text" variant="secondary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  )
};

export default SignIn;