import { createSlice } from '@reduxjs/toolkit'

interface LoginState {
     isLogin: boolean
}

const initialState: LoginState = {
     isLogin: false
}

const loginSlice = createSlice({
     name: 'login',
     initialState,
     reducers: {
          loginAuth: (state) => {
               state.isLogin = true
          }
     }
})

export const { loginAuth } = loginSlice.actions
export default loginSlice.reducer