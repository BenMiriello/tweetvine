import React, { ReactNode, ReactNodeArray } from 'react';
import Nav from './Nav';

interface PageProps {nav?: boolean; children: ReactNode | ReactNodeArray};

export default function Page(props: PageProps) {
  return (
    <div className="h-screen w-screen flex flex-col">
      {props.nav && <Nav />}
      <div className="flex h-screen">
        {props.children}
      </div>
    </div>
  );
}
