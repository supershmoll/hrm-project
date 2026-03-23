import { createSlice } from '@reduxjs/toolkit';

const tokenFromStorage = localStorage.getItem("hrm_token");

const initialState = {
    token: tokenFromStorage ? tokenFromStorage : null,
    
    isAuthenticated: tokenFromStorage ? true : false,
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;  
        }

    }
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;