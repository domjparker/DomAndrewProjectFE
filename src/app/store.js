import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../features/signIn/signInSlice';
import signUpReducer from '../features/signUp/SignUpSlice';
import homePageReducer from '../pages/Home/homePageSlice';


const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
    homePage: homePageReducer,
  }
});

export default store;