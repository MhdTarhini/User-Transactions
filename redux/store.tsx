import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userReducer';
import {transactionsReducer} from './Transactions/transactionsReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    Transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
