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
export const selectSignInEmail = (state) => {
  return state.signIn.email;
}

export const selectSignInPassword = (state) => {
  return state.signIn.password;
}