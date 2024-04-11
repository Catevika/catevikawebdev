"use client";
import { handleGithubLogin, handleLogOut } from '@/app/lib/actions';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export default function AuthButton() {
  const t = useTranslations('Log');

  const { data: session } = useSession();

  return (
    <>
      {session?.user ?
        <form action={handleLogOut}>
          <button type='submit'>{t(`${'LogoutButton'}`)}</button>
        </form>
        : <form action={handleGithubLogin}>
          <button type='submit'>{t(`${'LoginButton'}`)}</button>
        </form>}
    </>
  );
}
