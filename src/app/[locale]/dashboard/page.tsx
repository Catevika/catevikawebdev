"use client";

import styles from '@/app/[locale]/dashboard/dashboard.module.css';
import AuthButton from '@/components/Buttons/AuthButton';
import BackButton from '@/components/Buttons/BackButton';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Dashboard() {
  const t = useTranslations('DashboardPage');

  const { data: session } = useSession();

  return (
    <>
      {session?.user ?
        session?.user?.name === 'Dominique BELLO' ? <>
          <h3>Dashboard</h3>
          <AuthButton />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Image src={'/images/Site_under_construction.png'} alt='' height={504} width={896} priority />
          </div>
        </> : <BackButton /> : <>
          <div className={styles.dashboard__title}>
            <p>{t('text')}</p>
            <AuthButton />
          </div>
          <BackButton />
        </>}
    </>
  );
}
