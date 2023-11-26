export interface ITransaction {
  date: Date;
  amount: number;
  points: number;
  userEmail: string;
}

export interface ITransactionsStore {
  transactions: ITransaction[];
}
