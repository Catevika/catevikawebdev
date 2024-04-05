"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Dashboard() {

  const { data: session } = useSession();

  console.log(session?.user);

  return (
    <>
      {session && session.user ? <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Image src={'/images/Site_under_construction.png'} alt='' height={504} width={896} priority />
        </div>
        <h3>Dashboard</h3>
      </> : <p className='error'>Only admin can access this page</p>}
    </>
  );
}
