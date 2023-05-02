import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        title: 'Learning rtk',
        content: "I've heard more good things"
    },
    {
        id: '2',
        title: 'Learning thunk',
        content: "I've heard more bad things"
    }
]

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title,content, userId){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})
export const selectAllPosts = (state) => state.post
export const postAction = postSlice.actions
export default postSlice