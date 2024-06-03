"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function CheckIcon() {
  const t = useTranslations('CheckIcon');

  return (
    <>
      <Image data-hide-on-theme='light' src={'/icons/check.svg'} alt={t('alt')} sizes='64x64' width={64} height={64} />
      <Image data-hide-on-theme='dark' src={'/icons/check-light.svg'} alt={t('alt')} sizes='64x64' width={64} height={64} />
    </>
  );
}
