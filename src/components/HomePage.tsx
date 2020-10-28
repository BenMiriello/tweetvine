import React from 'react';

import useAppState from '../state';
import Page from './Page';
import SplashPage from './SplashPage';

export default function HomePage() {
  const { user } = useAppState();

  return user ? (
    <Page>
      <div className="w-1/4 bg-blue-100 text-center flex justify-center">
        <div className="w-12 flex flex-col justify-center">
          <p className="text-black text-left my-2 text-xl">Home</p>
          <p className="text-black text-left my-2 text-xl">Messages</p>
          <p className="text-black text-left my-2 text-xl">Profile</p>
          <p className="text-black text-left my-2 text-xl">Tweet</p>
        </div>
      </div>
      <div className="w-1/2 bg-white"></div>
      <div className="w-1/4 bg-blue-100"></div>
    </Page>
  ) : <SplashPage />;
}
