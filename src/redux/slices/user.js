import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Edwin',
  age: 33,
  address: 'nyc'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },
    setUserData: (state, action) => {
      state.name = action.payload.name
      state.address = action.payload.address
      state.age = action.payload.age
    }
  },
})

// Action creators are generated for each case reducer function
export const { setName, setAddress, setUserData } = userSlice.actions

export default userSlice.reducer

