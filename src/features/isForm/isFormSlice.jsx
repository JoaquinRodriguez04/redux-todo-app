import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false,
};

export const isFormSlice = createSlice({
    name: 'isForm',
    initialState,
    reducers: {
        activeForm: (state, action) => {
            return {
                ...state.isActive,
                isActive: !state.isActive,
            }
        },
    },
});

export const { activeForm } = isFormSlice.actions;

export default isFormSlice.reducer;