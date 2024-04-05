"use client";

import { checkUserExists, registerUser } from '@/app/[locale]/register/_actions';
import styles from '@/app/[locale]/register/register.module.css';
import PasswordEye from '@/components/PasswordEye/PasswordEye';
import SendButton from '@/components/SendButton/SendButton';
import { type RegisterFormValues } from '@/types/types';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';

function RegisterForm() {
  const t = useTranslations('RegisterPage');

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisiblePass = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormValues>({
    reValidateMode: 'onChange',
    mode: 'onBlur',
    defaultValues: {
      image: '',
      imageLight: '',
      username: '',
      email: '',
      password: '',
      isAdmin: false
    }
  });

  const router = useRouter();

  const handleSubmitUser = async (formData: RegisterFormValues) => {
    const userExists = await checkUserExists(formData.username);

    if (JSON.parse(userExists)) {
      toast.error(t('toastExists'), {
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
    } else {
      const user = await registerUser(formData);

      if (user) {
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
        router.push('/login');
      } else {
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
    }
  };

  return (
    <>
      <form noValidate className={styles.register__form__container} onSubmit={handleSubmit(handleSubmitUser)}>
        <div className='form__group'>
          <label className='form__label' htmlFor="username">{t('label1')} {errors.username ? <span role="alert">{t('error1')}</span> : null}</label>
          <input aria-invalid={errors.username ? "true" : "false"} className='form__input' type="text" id="username" placeholder={t('placeholder1')} autoComplete='username' {...register('username', { required: t('error1'), maxLength: { value: 50, message: t('infotool1') } })} title={t('infotool1')} />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor="email">{t('label2')} {errors.email ? <span role="alert">{t('error2')}</span> : null}</label>
          <input aria-invalid={errors.email ? "true" : "false"} className='form__input' type="text" id="email" placeholder={t('placeholder2')} autoComplete='email' {...register('email', { required: t('error2'), pattern: { value: /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/i, message: t('error2') } })} />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor="password">{t('label3')} {errors.password ? <span role="alert">{t('error3')}</span> : null}</label>
          <div className='form__input__show' >
            <input aria-invalid={errors.password ? "true" : "false"} className='form__input' type={isVisible ? 'text' : 'password'} id="password" placeholder={t('placeholder3')}  {...register('password', { required: t('error3'), minLength: { value: 6, message: t('error3') } })} autoComplete='current-password' title={t('infotool3')} />
            <PasswordEye isVisible={isVisible} toggleVisiblePass={toggleVisiblePass} />
          </div>
        </div>
        <SendButton disabled={isSubmitting} />
      </form>
    </>
  );
}

export default RegisterForm;