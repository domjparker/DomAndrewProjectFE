import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'signUp',
  initialState: {
    // signedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  reducers: {
    // setSignedIn: (state, action) => {
    //   return {
    //     ...state,
    //     signedIn: action.payload,
    //   }
    // },
    setFirstName: (state, action) => {
      return {
        ...state,
        firstName: action.payload,
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
        lastName: action.payload,
      }
    },
    clearLastName: (state, action) => {
      return {
        ...state,
        lastName: "",
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
    setConfirmPassword: (state, action) => {
      return {
        ...state,
        confirmPassword: action.payload,
      }
    },
    clearConfirmPassword: (state, action) => {
      return {
        ...state,
        confirmPassword: "",
      }
    },
  }
}

export const signUpSlice = createSlice(options);

export const { setFirstName, clearFirstName, setLastName, clearLastName, setEmail, clearEmail, setPassword, clearPassword, setConfirmPassword, clearConfirmPassword} = signUpSlice.actions;

export default signUpSlice.reducer;





// Selectors


export const selectSignUpFirstName = (state) => {
  return state.signUp.firstName;
}

export const selectSignUpLastName = (state) => {
  return state.signUp.lastName;
}

export const selectSignUpEmail = (state) => {
  return state.signUp.email;
}

export const selectSignUpPassword = (state) => {
  return state.signUp.password;
}

export const selectSignUpConfirmPassword = (state) => {
  return state.signUp.confirmPassword;
}