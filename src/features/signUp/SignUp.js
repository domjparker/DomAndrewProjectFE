import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, selectFirstName, setLastName, selectLastName, setEmail, selectEmail, setPassword, selectPassword, setConfirmPassword, selectConfirmPassword } from './SignUpSlice';

function SignUp() {

  const firstNameState = useSelector(selectFirstName);
  const lastNameState = useSelector(selectLastName);
  const emailState = useSelector(selectEmail);
  const passwordState = useSelector(selectPassword);
  const confirmPasswordState = useSelector(selectConfirmPassword);

  const dispatch = useDispatch();

  const handleFirstNameChange = (event) => {
    dispatch(setFirstName(event.target.value));
  }
  const handleLastNameChange = (event) => {
    dispatch(setLastName(event.target.value));
  }

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  }

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  }
  const handleConfirmPasswordChange = (event) => {
    dispatch(setConfirmPassword(event.target.value));
  }

  return (
    <div className="input-form">
      <Form className="form">
        <Form.Group controlId="formFirstName" className="form-text">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" onChange={(event) => handleFirstNameChange(event)} value={firstNameState} />
        </Form.Group>
        <Form.Group controlId="formLastName" className="form-text">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" onChange={(event) => handleLastNameChange(event)} value={lastNameState} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="form-text">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => handleEmailChange(event)} value={emailState} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="form-text">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => handlePasswordChange(event)} value={passwordState} />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword" className="form-text">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => handleConfirmPasswordChange(event)} value={confirmPasswordState} />
        </Form.Group>
        <Button className="form-text" variant="secondary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  )
};

export default SignUp;