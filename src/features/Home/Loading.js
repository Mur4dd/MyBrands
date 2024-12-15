import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firsttime : false
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        setFirstTime: (state, action) => {
            state.firsttime = action.payload
        }
    },
})

export const { setFirstTime } = homeSlice.actions;

export default homeSlice.reducer;
