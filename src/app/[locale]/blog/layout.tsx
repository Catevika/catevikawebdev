import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

export default async function BlogLayout({ children }: { children: ReactNode; }) {
  const session = await auth();

  return (
    <>
      {session ? children : redirect('/login')}
    </>
  );
}
