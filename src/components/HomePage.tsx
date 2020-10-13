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
      <div className="h-screen flex">
        <div className="bg-blue-500 w-1/2 h-full flex flex-col justify-around">
          <div className="flex justify-center">
            <div>
              <div className="mx-auto mb-8"><p className="text-xl font-bold">Follow your interests.</p></div>
              <div className="mx-auto mb-8"><p className="text-xl font-bold">Hear what other people are talking about.</p></div>
              <div className="mx-auto"><p className="text-xl font-bold">Join the conversation.</p></div>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 w-1/2 h-full"></div>
      </div>
    </>
  );
}

/* <h1>Home Page</h1>
<button onClick={() => history.push('/signup')}>Signup</button>
<button onClick={() => history.push('/login')}>Login</button> */
