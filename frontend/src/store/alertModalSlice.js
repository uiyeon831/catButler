import { createSlice } from "@reduxjs/toolkit";

const alertModalSlice = createSlice({
  name: 'alertModal',
  initialState: {
    open: false,
    alertText: '',
    type: 'success',
  },
  reducers: {
    open: ( state, action ) => {
      state.open = true;
      state.alertText = action.payload.text;
      state.type = action.payload.type;
    },
    close: ( state ) => {
      state.open = false;
    }
  },
})

export const { open, close } = alertModalSlice.actions;

export default alertModalSlice.reducer;