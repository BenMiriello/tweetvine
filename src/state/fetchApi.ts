import { FetchBody } from '../types';
import { apiRoot } from '../constants';

const fetchApi = (
  endpoint: string,
  method: string = 'GET',
  data: FetchBody | null,
) => {
  const storedToken = localStorage.getItem('jwt') || null;

  return fetch(apiRoot + endpoint, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...storedToken && {'Authorization': `Bearer ${storedToken}`}
    },
    credentials: 'include',
    ...data && {body: JSON.stringify({ user: data })},
  })
};

export default fetchApi;
