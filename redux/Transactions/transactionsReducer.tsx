// transactionsSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITransactionsStore, ITransaction} from './types';

const initialState: ITransactionsStore = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: 'userTransactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transactions.push(action.payload);
    },
  },
});

export const {addTransaction} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
