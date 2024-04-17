"use client";

import { Link } from '@/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export default function NewPostButton() {
  const t = useTranslations("BlogPage");

  const { data: session } = useSession();

  return (
    <>
      {session?.user?.name === 'Catevika' ?
        <Link href='/blog/newpost'>{t('button')}</Link>
        : null}
    </>
  );
}
