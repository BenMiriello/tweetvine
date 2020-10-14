import React, { ReactNodeArray } from 'react';

export default function Page(props: {children: ReactNodeArray}) {
  return <div className="h-screen flex">{ props.children }</div>;
}
