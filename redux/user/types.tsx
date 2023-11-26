export interface IUserStore {
  token: string;
  userInfo: IUserInfoStore;
  active: boolean;
  isAuthenticated: boolean;
  points: number;
}

export interface IUserInfoStore {
  username: string;
  email: string;
}
