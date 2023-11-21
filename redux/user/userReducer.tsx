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
      state = action.payload;
      state.isAuthenticated = true;
    },
    LoadUserSuccess: (state, action: PayloadAction<IUserStore>) => {
      state = action.payload;
      state.isAuthenticated = true;
    },
    LogoutUser: state => {
      state = initialState;
    },
  },
});

export const {LoginUser, LoadUserSuccess, LogoutUser} = userSlice.actions;

export default userSlice.reducer;
