import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import userReducer from '../store/features/user/UserSlice';

const store = configureStore({
  reducer: {
    userState: userReducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // E

export default store