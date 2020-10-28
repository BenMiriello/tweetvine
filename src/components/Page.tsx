import React, { ReactNode, ReactNodeArray } from 'react';
import Nav from './Nav';

export default function Page(props: {children: ReactNode | ReactNodeArray}) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Nav />
      <div className="flex h-screen">
        {props.children}
      </div>
    </div>
  );
}
