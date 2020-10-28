import React, { ReactNode, ReactNodeArray } from 'react';

import Nav from './Nav';
import Error from './Error';

interface PageProps {nav?: boolean; children: ReactNode | ReactNodeArray};

export default function Page(props: PageProps) {
  
  return (
    <div className="h-screen w-screen flex flex-col">
      {props.nav && <Nav />}
      <Error />
      <div className="flex h-full">
        {/* make sure to leave space for navbar */}
        {props.children}
      </div>
    </div>
  );
}
