import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
    {id: 1, title: "First Day At Work", content: "My first day at work was an exciting and nerve-wracking experience"},
    {id: 2, title: "Second Day At Work", content: "One of the things I was looking forward to on my second day was meeting more of my colleagues. I had only met a handful of people on my first day, and I was excited to get to know more of my team. "}
]

const postsSlice = createSlice({
    name: "posts",
    initialState: { value: initialStateValue },
    reducers: {
        addPost: {
            reducer: (state, action) => {
            state.value.push(action.payload)
        },
        prepare: (title, content) => {
            return {
                payload: {
                    title, content
                }
            }
        }
    }
    }
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer