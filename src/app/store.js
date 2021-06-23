// store.js imports each of the slice reducers, combines them into a
// root reducer, creates a store, and exports it for use by the
// top-level index.js

import { createStore } from 'redux';

// initial state object
const initialState = {
  signedIn: false,
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  // testimonial: []
}

// action creators
export const setSignedIn = () => {
  return {
    type: 'signedIn/setSignedIn',
  };
}

export const setEmail = (email) => {
  return {
    type: 'email/setEmail',
    payload: email,
  }
}

export const clearEmail = () => {
  return {
    type: 'email/clearEmail',
  }
}

export const setPassword = (password) => {
  return {
    type: 'password/setPassword',
    payload: password,
  }
}

export const clearPassword = () => {
  return {
    type: 'password/clearPassword',
  }
}

export const setFirstName = (firstName) => {
  return {
    type: 'firstName/setFirstName',
    payload: firstName,
  }
}

export const clearFirstName = () => {
  return {
    type: 'firstName/clearFirstName',
  }
}

export const setLastName = (lastName) => {
  return {
    type: 'lastName/setLastName',
    payload: lastName,
  }
}

export const clearLastName = () => {
  return {
    type: 'lastName/clearLastName',
  }
}

// what about testimonials?



// reducer function
const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'signedIn/setSignedIn':
      return {
        ...state,
        signedIn: true
      }
    case 'email/setEmail':
      return {
        ...state,
        email: action.payload,
      }
    case 'email/clearEmail':
      return {
        ...state,
        email: "",
      }
    case 'password/setPassword':
      return {
        ...state,
        password: action.payload,
      }
    case 'password/clearPassword':
      return {
        ...state,
        password: "",
      }
    case 'firstName/setFirstName':
      return {
        ...state,
        firstName: action.payload,
      }
    case 'firstName/clearFirstName':
      return {
        ...state,
        firstName: "",
      }
    case 'lastName/setLastName':
      return {
        ...state,
        lastName: action.payload,
      }
    case 'lastName/clearLastName':
      return {
        ...state,
        lastName: "",
      }
    default:
      return state;
  }
}

// creation of store
export const store = createStore(landingPageReducer);

// Selectors
export const selectEmail = (state) => {
  return state.email;
}