import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'signIn',
  initialState: {
    signedIn: false,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    // testimonial: []
  },
  reducers: {
    setSignedIn: (state, action) => {
      return {
        ...state,
        signedIn: action.payload,
      }
    },
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      }
    },
    clearEmail: (state, action) => {
      return {
        ...state,
        email: "",
      }
    },
    setPassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      }
    },
    clearPassword: (state, action) => {
      return {
        ...state,
        password: "",
      }
    },
    setFirstName: (state, action) => {
      return {
        ...state,
        firstName: action.Payload,
      }
    },
    clearFirstName: (state, action) => {
      return {
        ...state,
        firstName: "",
      }
    },
    setLastName: (state, action) => {
      return {
        ...state,
        lastName: action.Payload
      }
    },
    clearLastName: (state, action) => {
      return {
        ...state,
        lastName:"",
      }
    },
  }
}

export const signInSlice = createSlice(options);

export const { setSignedIn, setEmail, clearEmail, setPassword, clearPassword, setFirstName, clearFirstName, setLastName, clearLastName } = signInSlice.actions;

export default signInSlice.reducer;





// Selectors
export const selectEmail = (state) => {
  return state.email;
}