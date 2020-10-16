import React from 'react';

import { useAppState } from '../state';
import Page from './Page';
import SplashPage from './SplashPage';

export default function HomePage() {
  const { user } = useAppState();

  return user ? <SplashPage /> : (
    <Page>
      <div className="w-1/4 bg-blue-100">
        <p>Home</p>
        <p>Messages</p>
        <p>Profile</p>
        <p>Tweet</p>
      </div>
      <div className="w-1/2 bg-white"></div>
      <div className="w-1/4 bg-blue-100"></div>
    </Page>
  );
}
