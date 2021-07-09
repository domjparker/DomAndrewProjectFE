import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'signIn',
  initialState: {
    // signedIn: false,
    email: "",
    password: "",
  },
  reducers: {
    // setSignedIn: (state, action) => {
    //   return {
    //     ...state,
    //     signedIn: action.payload,
    //   }
    // },
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
  }
}

export const signInSlice = createSlice(options);

export const { setSignedIn, setEmail, clearEmail, setPassword, clearPassword } = signInSlice.actions;

export default signInSlice.reducer;





// Selectors
export const selectEmail = (state) => {
  return state.email;
}

export const selectPassword = (state) => {
  return state.password;
}