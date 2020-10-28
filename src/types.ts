import { Dispatch, SetStateAction, } from 'react';

export interface UserType { name: string; email: string; };

export interface Login { email: string; password: string; };
export interface Account { email: string; name: string; password: string;};
export interface ChangeEmail { new_email: string; password: string;};
export interface ChangeName { new_name: string; password: string;};
export interface ChangePassword { old_password: string; new_password: string;};

export type FetchBody = Account | Login | ChangeEmail | ChangeName | ChangePassword;

export interface AppStateContextType {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  errors: Array<Error>;
  setErrors: Dispatch<SetStateAction<Error[]>>;
  signup: (data: Account) => void;
  login: (data: Login) => void;
  changeEmail: (data: ChangeEmail) => void;
  changeName: (data: ChangeName) => void;
  changePassword: (data: ChangePassword) => void;
  checkLoggedIn: () => void;
  logout: () => void;
  deleteAccount: () => void;
};
