export interface IUserStore {
  token: string;
  userInfo: IUserInfoStore;
  active: boolean;
  isAuthenticated: boolean;
}

export interface IUserInfoStore {
  username: string;
  email: string;
  points: number;
}
