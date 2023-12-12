import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialState: 'initialState'
};

const editorSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      return { ...state, initialState: action.payload };
    }
  },
});

const { reducer, actions } = editorSlice;

export const { setInitialState } = actions;
export default reducer;