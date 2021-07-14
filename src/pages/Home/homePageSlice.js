import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'homePage',
  initialState: {
    signInShowing: true,
  },
  reducers: {
    toggleSignInShowing: (state, action) => {
      return {
        ...state,
        signInShowing: action.payload,
      }
    }
  }
}

export const homePageSlice = createSlice(options);

export const { toggleSignInShowing } = homePageSlice.actions;

export default homePageSlice.reducer;


// Selectors
export const selectIsSignInShowing = (state) => {
  return state.homePage.signInShowing;
}