'use client';
import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    token: string | null
}

const initialState: AuthState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer