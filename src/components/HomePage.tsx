import React from 'react';
import { useHistory } from 'react-router-dom';

import Nav from './Nav';
import { useAppState } from '../state';

export default function HomePage() {
  const history = useHistory();

  const { user } = useAppState();

  return (
    <>
      { user ? <Nav /> : null }
      <div>
        <h1>Home Page</h1>
        <button onClick={() => history.push('/signup')}>Signup</button>
        <button onClick={() => history.push('/login')}>Login</button>
      </div>
    </>
  );
}
