import { Dispatch, SetStateAction } from 'react';

import { UserType, FetchBody } from '../types';

import { apiRoot } from '../constants';

const fetchApi = (
  endpoint: string,
  method: string = 'GET',
  data: FetchBody | null,
  setUser: Dispatch<SetStateAction<UserType | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setErrors: Dispatch<SetStateAction<Error[]>>,
) => {
  const storedToken = localStorage.getItem('jwt') || null;

  data && setLoading(true);

  fetch(apiRoot + endpoint, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...storedToken && {'Authorization': `Bearer ${storedToken}`}
    },
    credentials: 'include',
    ...data && {body: JSON.stringify({ user: data })},
  })
  .then(res => res.json())
  .then(r => {
    setUser(r.user || null);
    r.user && r.jwt ? localStorage.setItem('jwt', r.jwt) : localStorage.clear();
    data && r.errors && setErrors(r.errors.map((err: string) => new Error(err)));
  })
  .catch(errors => setErrors(errors.map((err: string) => new Error(err))));

  data && setLoading(false);
};

export default fetchApi;
