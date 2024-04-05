"use client";
import { handleGithubLogin, handleLogOut } from '@/app/utils/actions';
import styles from "@/components/Navbar/Navbar.module.css";
import type { Session } from 'next-auth';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function DashboardLink({ session }: { session: Session | null; }) {
  const t = useTranslations('Log');
  const pathname = usePathname();

  return (
    <>
      {pathname === t('link') ?
        session && session.user ?
          <form action={handleLogOut}>
            <button type='submit' className={styles.navbar__logout__button}>{t(`${'LogoutButton'}`)}</button>
          </form>
          : <form action={handleGithubLogin}>
            <button type='submit' className={styles.navbar__logout__button}>{t(`${'LoginButton'}`)}</button>
          </form> : null}
    </>
  );
}
