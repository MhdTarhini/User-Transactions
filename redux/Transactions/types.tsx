export interface ITransaction {
  date: string;
  amount: number;
  points: number;
  userInfo: IUserInfoStore;
}

export interface ITransactionsStore {
  transactions: ITransaction[];
}

export interface IUserInfoStore {
  username: string;
  email: string;
}
