import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: { cartISVisible: false },
    reducers: {
        toggle(state) {
            state.cartISVisible = !state.cartISVisible
        }
    }
})

export const cartUiAction=cartUiSlice.actions
export default cartUiSlice