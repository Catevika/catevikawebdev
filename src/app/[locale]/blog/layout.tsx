"use client";

import { useSession } from 'next-auth/react';
import type { ReactNode } from 'react';
import Login from '../login/page';

export default function BlogLayout({ children }: { children: ReactNode; }) {
  const { status } = useSession();


  return (
    <>
      {status === 'authenticated' ? children : <Login />}
    </>

  );
}
