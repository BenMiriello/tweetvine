import React, { useEffect, createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import fetchApi, { Account, Login, ChangeEmail, ChangeName, ChangePassword, FetchBody } from './fetchApi';

export interface UserType { name: string; email: string; };

export interface AppStateContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  signup: (data: Account) => void;
  login: (data: Login) => void;
  checkLoggedIn: () => void;
  changeEmail: (data: ChangeEmail) => void;
  changeName: (data: ChangeName) => void;
  changePassword: (data: ChangePassword) => void;
  logout: () => void;
  deleteAccount: () => void;
  errors: Array<Error> | null;
  setErrors: (errors: Array<Error>) => void; // Dispatch<SetStateAction<Error | null>>;
};

export const AppStateContext = createContext<AppStateContextType>(null!);

export const AppStateProvider = (props: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [errors, _setErrors] = useState<Array<Error> | null>(null);

  useEffect(() => {handleFetch('check_logged_in')}, []);

  const setErrors = (error: Array<Error> | null) => {
    if (error) {
      console.log(error);
      _setErrors(error);
    };
  };

  const handleFetch = async (endpoint: string, method: string = 'GET', data?: FetchBody) => {
    const storedToken = localStorage.getItem('jwt') || null;
    setLoading(true);
    fetchApi(endpoint, method, storedToken, data || null)
      .then(r => r.json())
      .then(r => {
        setUser(r.user || null);
        r.user && r.jwt && localStorage.setItem('jwt', r.jwt);
        r.errors && setErrors(r.errors);
      })
      .catch(setErrors);
    setLoading(false);

    if (endpoint === ('logout' || 'delete_account')) {
      setUser(null);
      localStorage.clear();
    };
  };

  const contextValue: AppStateContextType = {
    loading,
    setLoading,
    user,
    setUser,
    signup: (data: Account) => handleFetch('signup', 'POST', data),
    login: (data: Login) => handleFetch('login', 'POST', data),
    checkLoggedIn: () => handleFetch('check_logged_in'),
    changeName: (data: ChangeName) => handleFetch('change_name', 'PATCH', data),
    changeEmail: (data: ChangeEmail) => handleFetch('change_email', 'PATCH', data),
    changePassword: (data: ChangePassword) => handleFetch('change_password', 'PATCH', data),
    logout: () => { handleFetch('logout', 'DELETE'); setUser(null) },
    deleteAccount: () => { handleFetch('delete_account', 'DELETE'); setUser(null) },
    errors,
    setErrors,
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
};

export default () => useContext(AppStateContext); // useAppState
