"use client";
import { createLoginCookie, verifyPassword } from '@/app/[locale]/login/_actions';
import { checkUserExists } from '@/app/[locale]/register/_actions';
import styles from '@/app/[locale]/register/register.module.css';
import SendButton from '@/components/SendButton/SendButton';
import { type LoginFormValues } from '@/types/types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import PasswordEye from '../PasswordEye/PasswordEye';

export default function LoginForm() {
  const t = useTranslations('LoginPage');

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblePass = () => setIsVisible(!isVisible);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormValues>({
    reValidateMode: 'onChange',
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
    }
  });

  const handleSubmitUser = async (formData: LoginFormValues) => {
    const existingUser = await checkUserExists(formData.username);

    if (!existingUser) {
      toast.error(t('toastUsernameError'), {
        position: "top-center",
        transition: Bounce,
        style: {
          fontSize: '32px',
          width: 'max-content',
          height: 'max-content',
          color: 'hsl(337, 63%, 54%)',
          borderRadius: '1rem',
          backgroundColor: 'hsl(233, 100%, 8%)'
        },
        progressStyle: {
          background: 'hsl(337, 63%, 54%)'
        }
      });
      reset();
      return null;
    } else try {
      const allow = await verifyPassword(formData, JSON.parse(existingUser));
      if (allow === null) {
        toast.error(t('toastPasswordError'), {
          position: "top-center",
          transition: Bounce,
          style: {
            fontSize: '32px',
            width: 'max-content',
            height: 'max-content',
            color: 'hsl(337, 63%, 54%)',
            borderRadius: '1rem',
            backgroundColor: 'hsl(233, 100%, 8%)'
          },
          progressStyle: {
            background: 'hsl(337, 63%, 54%)'
          }
        });
      } else {
        toast.success(t('toastSuccess'), {
          position: "top-center",
          transition: Bounce,
          style: {
            fontSize: '32px',
            width: 'max-content',
            height: 'max-content',
            color: 'hsl(80, 63%, 54%)',
            borderRadius: '1rem',
            backgroundColor: 'hsl(233, 100%, 8%)'
          },
          progressStyle: {
            background: 'hsl(80, 63%, 54%)'
          }
        });
        reset();
        createLoginCookie();
        router.push('/blog');
      }
    } catch (error) {
      toast.error(t('toastError'), {
        position: "top-center",
        transition: Bounce,
        style: {
          fontSize: '32px',
          width: 'max-content',
          height: 'max-content',
          color: 'hsl(337, 63%, 54%)',
          borderRadius: '1rem',
          backgroundColor: 'hsl(233, 100%, 8%)'
        },
        progressStyle: {
          background: 'hsl(337, 63%, 54%)'
        }
      });
    }
  };

  return (
    <>
      <div className={styles.register__title}>
        <h3>{t('title')}</h3>
        <p>{t('text')} <Link href="/register">{t('link')}</Link></p>
      </div>
      <form noValidate className={styles.register__form__container} onSubmit={handleSubmit(handleSubmitUser)} >
        <div className='form__group'>
          <label className='form__label' htmlFor="username">{t('label1')} {errors.username ? <span role="alert">{t('error1')}</span> : null}</label>
          <input aria-invalid={errors.username ? "true" : "false"} className='form__input' type="text" id="username" placeholder={t('placeholder1')} autoComplete='username' {...register('username', { required: t('error1'), max: 50 })} title={t('infotool1')} />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor="password">{t('label3')} {errors.username ? <span role="alert">{t('error3')}</span> : null}</label>
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