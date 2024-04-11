"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function SuccessIcon() {
  const t = useTranslations('SuccessIcon');

  return (
    <>
      <Image data-hide-on-theme='light' src={'/icons/success.svg'} alt={t('alt')} sizes='64x64' width={64} height={64} />
      <Image data-hide-on-theme='dark' src={'/icons/success-light.svg'} alt={t('alt')} sizes='64x64' width={64} height={64} />
    </>
  );
}
