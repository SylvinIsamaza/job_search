import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const backendPath="http://localhost:6764"
const userReducer = createSlice(

  {
    name:"user",
    initialState: {
      loggedIn: false,
      user: null,
      loading: false,
      error:null,
    },
    reducers: {
      loginStart: state => {
        state.loading=true
      },
      loginSuccess: async(state, action) => {
        state.loading = false
        const data = await axios.get(`${backendPath}/create`, action.payload)
        console.log(data)
      
      },
      loginFailure: async (state, action) => {
        state.loading = false,
          state.user = null,
          state.loggedIn = false
        state.error=action.payload
      },
      createUserStart: (state) => {
        state.loading=true
      },
      createUserSuccess: (state,action) => {
        state.loading = false,
          state.user = action.payload,
          state.loggedIn=true
      },
      createUserFailure: (state, action) => {
        state.loading = false,
          state.user =null,
          state.error = action.payload,
          state.loggedIn=false
      }
    }
  }
)
export const{loginStart,loginSuccess,loginFailure,createUserFailure,createUserStart,createUserSuccess}=userReducer.actions
export default userReducer.reducer