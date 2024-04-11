import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

const initialState: {
  colorMode: string
} = {
  colorMode: 'light'
}

const themeSlice = createSlice({
  name: 'colorMode',
  initialState: initialState,
  reducers: {
    setColorMode: (state) => {
      return {
        ...state,
        colorMode: state.colorMode === 'light' ? 'dark' : 'light'
      } 
    }
  }
})

export const switchColorMode = () => {
  return (dispatch: AppDispatch) => {
    dispatch(setColorMode())
  }
}

export const { setColorMode } = themeSlice.actions
const themeReducer = themeSlice.reducer
export default themeReducer