import React from 'react';

import { useAppState } from '../state';
import Page from './Page';
import SplashPage from './SplashPage';

export default function HomePage() {
  const { user } = useAppState();

  return user ? <SplashPage /> : (
    <Page>
      <div className="w-1/4 bg-gray-200"></div>
      <div className="w-1/2 bg-gray-400"></div>
      <div className="w-1/4 bg-gray-600"></div>
    </Page>
  );
}
