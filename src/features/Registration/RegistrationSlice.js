import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    LoginMethod: 1,  // 1 for number 2 for id 
    usernumber: "",  // forget number otp  
    userotp: "",
}

export const Registration = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {
        ChangeLoginMethod: (state, action) => {
            state.LoginMethod = action.payload;
        },
        SetUserNumber: (state, action) => {
            state.usernumber = action.payload;
        },
        setUserOtp: (state, action) => {
            state.userotp = action.payload
        }
    },
})

export const { ChangeLoginMethod, SetUserNumber, setUserOtp } = Registration.actions

export default Registration.reducer
