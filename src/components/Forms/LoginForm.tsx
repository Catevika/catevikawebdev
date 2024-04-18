"use client";

import styles from '@/app/[locale]/register/register.module.css';
import { handleCredentialsLogin } from '@/app/lib/actions';
import SendButton from '@/components/Buttons/SendButton';
import PasswordEye from '@/components/Forms/PasswordEye/PasswordEye';
import type { LoginFormValues } from '@/types/types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const t = useTranslations('LoginPage');

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblePass = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onBlur',
    defaultValues: {
      name: '',
      password: '',
    }
  });

  const login = async (credentials: LoginFormValues) => {
    try {
      await handleCredentialsLogin(credentials);
    } catch (error) {
      toast.error(t('toastError'));
    };
  };

  return (
    <>
      <div className={styles.register__title}>
        <h3>{t('title')}</h3>
        <p>{t('text')} <Link href="/register">{t('link')}</Link></p>
      </div>
      <form noValidate className={styles.register__form__container} onSubmit={handleSubmit(login)} >
        <div className='form__group'>
          <label className='form__label' htmlFor="name">{t('label1')} {errors.name ? <span role="alert">{t('error1')}</span> : null}</label>
          <input aria-invalid={errors.name ? "true" : "false"} className='form__input' type="text" id="name" placeholder={t('placeholder1')} autoComplete='name' {...register('name', { required: t('error1'), max: 50 })} title={t('infotool1')} />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor="password">{t('label3')} {errors.name ? <span role="alert">{t('error3')}</span> : null}</label>
          <div className='form__input__show' >
            <input aria-invalid={errors.password ? "true" : "false"} className='form__input' type={isVisible ? 'text' : 'password'} id="password" placeholder={t('placeholder3')}  {...register('password', { required: t('error3'), min: 6 })} autoComplete='current-password' title={t('infotool3')} />
            <PasswordEye isVisible={isVisible} toggleVisiblePass={toggleVisiblePass} />
          </div>
        </div>
        <SendButton disabled={isSubmitting} />
      </form>
    </>
  );
}