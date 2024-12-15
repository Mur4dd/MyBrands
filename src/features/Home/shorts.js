import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
    whoupload: ""
}

export const Shorts = createSlice({
    name: 'short',
    initialState: initialState,
    reducers: {
        setShort: function(state, action) { 
            state.images = action.payload.images;
            state.whoupload = action.payload.whoupload;
        }
    },
})

export default Shorts.reducer;

export const { setShort } = Shorts.actions; 
