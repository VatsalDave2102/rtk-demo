import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning rtk",
    content: "I've heard more good things",
    date: sub(new Date(),{minutes: 10}).toISOString()
  },
  {
    id: "2",
    title: "Learning thunk",
    content: "I've heard more bad things",
    date: sub(new Date(),{minutes: 10}).toISOString()
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});
export const selectAllPosts = (state) => state.post;
export const postAction = postSlice.actions;
export default postSlice;
