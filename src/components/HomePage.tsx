import React from 'react';
import { useHistory } from 'react-router-dom';

import Nav from './Nav';
import { useAppState } from '../state';
import { appName } from '../constants';

export default function HomePage() {
  const history = useHistory();
  const { user } = useAppState();

  return (
    <>
      { user ? <Nav /> : null }
      <div className="h-screen flex">
        <div className="bg-blue-500 w-1/2 h-full flex flex-col justify-around p-4">
          <div className="flex justify-center">
            <div className="max-w-md">
              <div className="mx-auto mb-8">
                <p className="text-xl font-bold">Follow your interests.
                </p>
              </div>
              <div className="mx-auto mb-8">
                <p className="text-xl font-bold">Hear what other people are talking about.
                </p>
              </div>
              <div className="mx-auto">
                <p className="text-xl font-bold">Join the conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 w-1/2 h-full flex flex-col justify-around p-4">
          <div className="flex justify-center">
            <div className="max-w-md">
              <p className="text-3xl font-bold mt-4 mb-8">See what's happening in the world right now</p>
              <p className="text-lg font-bold">Join { appName } today.</p>
              <div className="w-full flex flex-col flex-wrap justify-center">
                <button className="my-4 h-10 bg-blue-500 rounded-full font-bold" onClick={() => history.push('/signup')}>Sign up</button>
                <button className="mb-2 h-10 border-2 border-blue-500 rounded-full text-blue-300 font-bold" onClick={() => history.push('/login')}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
