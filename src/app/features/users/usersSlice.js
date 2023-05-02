import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Gunjan",
  },
  {
    id: "1",
    name: "Prince",
  },
  {
    id: "2",
    name: "Harsh",
  },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users
export default usersSlice
