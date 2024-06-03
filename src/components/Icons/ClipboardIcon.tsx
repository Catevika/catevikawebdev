"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function ClipboardIcon() {
  const t = useTranslations('ClipboardIcon');

  return (
    <>
      <Image data-hide-on-theme='light' src={'/icons/clipboard.svg'} alt={t('alt')} sizes='64x64' width={64} height={64} />
      <Image data-hide-on-theme='dark' src={'/icons/clipboard-light.svg'} alt={t('alt')} sizes='64x64' width={64} height={64} />
    </>
  );
}
