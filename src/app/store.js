import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../features/signIn/signInSlice';


const store = configureStore({
  reducer: {
    signIn: signInReducer,
  }
});

export default store;