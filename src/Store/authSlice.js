import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentuser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.currentuser = action.payload;
    },
    loginUser: (state, action) => {
      state.currentuser = action.payload;
    },
    logoutUser: (state) => {
      localStorage.removeItem("currentUser");
      state.currentuser = {};
    },
  },
});
export const { signUpUser, logoutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
