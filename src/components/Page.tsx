import React, { ReactNodeArray } from 'react';
import Nav from './Nav';

export default function Page(props: {children: ReactNodeArray}) {
  return (
    <div className="h-screen flex flex-col">
      <Nav />  
      {props.children}
    </div>
  );
}
