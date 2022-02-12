import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser';
import apiIntance from '../../../services/users.service';

interface UserState {
  user: IUser,
  userDetails: any
}

export const fetchAuthUser = createAsyncThunk(
  'users/fetchUser',
  async (name: string, {dispatch}) => {
    const response = await apiIntance.fetchPersonsByName(name)
    console.log(response);
    dispatch(setUpUserDetails(response));
  }
);


const initialState = { 
    user: {
        email: "",
        uid: "",
        accessToken: ""
    },

    userDetails: null

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

    setUpUserDetails(state: UserState, action: PayloadAction<any>) {
      console.log(action.payload);
        state.userDetails = action.payload;
    }
   
  },
})

export const { setUser, setUpUserDetails } = userSlice.actions
export default userSlice.reducer