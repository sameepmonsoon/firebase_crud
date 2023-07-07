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
      console.log(action.payload);
      state.currentuser = action.payload;
    },
    logoutUser: (state) => {
      state.currentuser = {};
      localStorage.removeItem("currentUser");
    },
  },
});
export const { signUpUser, logoutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
