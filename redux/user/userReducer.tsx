import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUserStore} from './types';

const initialState: IUserStore = {
  token: '',
  userInfo: {
    username: '',
    email: '',
  },
  points: 0,
  active: false,
  isAuthenticated: false,
};

interface AddPointsPayload {
  points: number;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoginUser: (state, action: PayloadAction<IUserStore>) => {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      state.active = action.payload.active;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    addPoints: (state, action: PayloadAction<AddPointsPayload>) => {
      state.points += action.payload.points;
    },
    LogoutUser: state => {
      state = initialState;
    },
  },
});

export const {LoginUser, LogoutUser, addPoints} = userSlice.actions;

export default userSlice.reducer;
