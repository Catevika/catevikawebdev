import { auth } from '@/app/lib/auth';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function BlogLayout({ children }: { children: ReactNode; }) {
  const session = await auth();

  return (
    <>
      {session ? children : redirect('/login')}
    </>
  );
}
