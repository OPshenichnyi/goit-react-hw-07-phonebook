import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'fillter',
    initialState: {
        find: '',
    },
    reducers: {
        changeFindStr(state, action) {
            state.find = action.payload;
        }
    }
})

export const { changeFindStr } = slice.actions
export const fillterReducer = slice.reducer
