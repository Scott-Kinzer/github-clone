import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser';

interface UserState {
  user: IUser,
  
}

const initialState = { 
    user: {
        email: "",
        uid: "",
        accessToken: ""
    }

} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<IUser>) {
      state.user = {
          ...action.payload
      }
    },
   
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer