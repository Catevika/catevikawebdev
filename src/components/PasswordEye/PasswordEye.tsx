"use client";
import styles from '@/components/PasswordEye/PasswordEye.module.css';
import type { PasswordEyeProps } from '@/types/types';
import Image from 'next/image';

export default function PasswordEye({ isVisible, toggleVisiblePass }: PasswordEyeProps) {

  return (
    <>
      {isVisible ?
        <>
          <Image data-hide-on-theme='light' onClick={toggleVisiblePass} className={styles.password__icon} src={'/icons/close-eye.svg'} alt='Password hide icon' sizes='32x32' width={0} height={0} />
          <Image data-hide-on-theme='dark' onClick={toggleVisiblePass} className={styles.password__icon} src={'/icons/close-eye-light.svg'} alt='Password hide icon' sizes='32x32' width={0} height={0} />
        </>
        :
        <>
          <Image data-hide-on-theme='light' onClick={toggleVisiblePass} className={styles.password__icon} src={'/icons/open-eye.svg'} alt='Password reveal icon' sizes='32x32' width={0} height={0} />
          <Image data-hide-on-theme='dark' onClick={toggleVisiblePass} className={styles.password__icon} src={'/icons/open-eye-light.svg'} alt='Password reveal icon' sizes='32x32' width={0} height={0} />
        </>}
    </>
  );
}
