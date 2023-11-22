import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUserStore} from './types';

const initialState: IUserStore = {
  token: '',
  userInfo: {
    username: '',
    email: '',
  },
  active: false,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoginUser: (state, action: PayloadAction<IUserStore>) => {
      // state = action.payload;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      state.active = action.payload.active;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    LogoutUser: state => {
      state = initialState;
    },
  },
});

export const {LoginUser, LogoutUser} = userSlice.actions;

export default userSlice.reducer;
