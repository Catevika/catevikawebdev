"use client";
import { useTranslations } from 'next-intl';

function SendButton({ disabled }: { disabled: boolean; }) {
  const t = useTranslations('SendButton');
  return (
    <>
      <button type="submit" disabled={disabled}>{disabled ? t('Sending') : t('Send')}</button>
    </>
  );
}

export default SendButton;