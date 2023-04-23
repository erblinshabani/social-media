import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { showSidebarVal: false }

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {value: initialStateValue },
    reducers: {
        showSidebar: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { showSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer