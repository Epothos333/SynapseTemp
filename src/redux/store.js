import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import wordReducer from './slices/words'

export const store = configureStore({
  reducer: {
    user: userReducer,
    word: wordReducer
  },
})

