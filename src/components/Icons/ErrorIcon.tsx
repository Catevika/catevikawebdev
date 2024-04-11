"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function ErrorIcon() {
  const t = useTranslations('ErrorIcon');

  return (
    <>
      <Image src={'/icons/error.svg'} alt={t('alt')} sizes='64x64' width={64} height={64} />
    </>
  );
}
