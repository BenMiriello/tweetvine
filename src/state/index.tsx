import React, { useEffect, createContext, useContext, useState, ReactNode } from 'react';

import fetchApi from './fetchApi';
import { UserType, AppStateContextType, FetchBody } from '../types';
import { Account, Login, ChangeEmail, ChangeName, ChangePassword } from '../types';

export const AppStateContext = createContext<AppStateContextType>(null!);

export const AppStateProvider = (props: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [errors, setErrors] = useState<Array<Error>>([]);

  const handleFetch = async (endpoint: string, method: string = 'GET', data?: FetchBody) => {
    fetchApi(endpoint, method, data || null, setUser, setLoading, setErrors)
  };

  useEffect(() => {handleFetch('check_logged_in')});

  const contextValue: AppStateContextType = {
    user,
    setUser,
    loading,
    setLoading,
    errors,
    setErrors,
    signup: (data: Account) => handleFetch('signup', 'POST', data),
    login: (data: Login) => handleFetch('login', 'POST', data),
    changeName: (data: ChangeName) => handleFetch('change_name', 'PATCH', data),
    changeEmail: (data: ChangeEmail) => handleFetch('change_email', 'PATCH', data),
    changePassword: (data: ChangePassword) => handleFetch('change_password', 'PATCH', data),
    checkLoggedIn: () => handleFetch('check_logged_in'),
    logout: () => { setUser(null); localStorage.clear(); },
    deleteAccount: () => handleFetch('delete_account', 'DELETE'),
  };

  return <AppStateContext.Provider value={contextValue}>{props.children}</AppStateContext.Provider>;
};

export default () => useContext(AppStateContext); /* useAppState */
