import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },

  reducers: {

    sendUserDetails: (state, action) => {
          // logic for login
          state.user = action.payload;
      }

   
  },
});

export const {sendUserDetails}= userSlice.actions

export default userSlice.reducer

