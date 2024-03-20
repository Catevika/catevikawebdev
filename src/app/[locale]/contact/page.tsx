'use client';

import styles from '@/app/[locale]/contact/contact.module.css';
import SendButton from '@/components/SendButton/SendButton';
import type { FormValues } from '@/types/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { sendEmail } from './_actions';
// import { Bounce, toast } from 'react-toastify';

export default function Contact() {
  const t = useTranslations('Contact');

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    progressive: true
  });

  const [ honeypot, setHoneypot ] = useState('');

  if (honeypot) {
    console.log('Bot detected');
    return;
  }

  const processForm: SubmitHandler<FormValues> = async (data) => {

    try {
      const result = await sendEmail(data);

      console.log(result);
    } catch (error) {
      console.log(error);
    }


    //   if (error) {
    //     toast.error(t(`${'toastError'}`), {
    //       position: "top-center",
    //       transition: Bounce,
    //       style: {
    //         color: 'hsl(337, 63%, 54%)',
    //         background: 'hsl(233, 100%, 8%)'
    //       },
    //       progressStyle: {
    //         background: 'hsl(337, 63%, 54%)'
    //       }
    //     });
    //   } else {
    //     toast.success(t(`${'toastSuccess'}`), {
    //       position: "top-center",
    //       transition: Bounce,
    //       style: {
    //         width: 'fit-content',
    //         whiteSpace: 'nowrap',
    //         color: 'hsl(80, 63%, 54%)',
    //         background: 'hsl(233, 100%, 8%)',
    //       },
    //       progressStyle: {
    //         background: 'hsl(80, 63%, 54%)',
    //       }
    //     });
    //     reset();
    //   }
  };

  return (
    <>
      <div className={styles.contact__content}>
        <div className={styles.contact__content__left}>
          <h3>{t(`${'title'}`)}</h3>
          <div className='image__container'>
            <Image className='image' src={'/images/email.png'} alt='' width={0}
              height={0} sizes='50vw' priority />
          </div>
        </div>
        <form noValidate className='form' onSubmit={handleSubmit(processForm)}>
          <label aria-hidden="true" htmlFor="name__verify" className='form__label__hide'>
            Humans will not fill out this field
            <input type="text" id="name__verify" name='name__verify' aria-hidden="true" autoComplete='off' onChange={(e) => setHoneypot(e.target.value)} value={honeypot} />
          </label>
          <div className='form__visible'>
            <div className='form__group'>
              <label className='form__label' htmlFor="name">{t(`${'label1'}`)} {errors.name ? <span role="alert">{errors.name.message}</span> : null}</label>
              <input aria-invalid={errors.name ? "true" : "false"} className='form__input' type="text" id="name" placeholder="Jane Smith" autoComplete='name' {...register('name', { required: t(`${'error1'}`) })} />
            </div>
            <div className='form__group'>
              <label className='form__label' htmlFor="email">{t(`${'label2'}`)} {errors.email ? <span role="alert">{errors.email.message}</span> : null}</label>
              <input aria-invalid={errors.email ? "true" : "false"} className='form__input' type="text" id="email" placeholder="jane.smith@example.com" autoComplete='email' {...register('email', { required: 'Enter a valid email address', pattern: { value: /^\S+@\S+$/i, message: t(`${'error2'}`) } })} />
            </div>
            <div className='form__group'>
              <label className='form__label' htmlFor="message">{t(`${'label3'}`)} {errors.message ? <span role="alert">{errors.message.message}</span> : null}</label>
              <textarea aria-invalid={errors.message ? "true" : "false"} className='form__textarea' id="message" placeholder={t(`${'placeholder'}`)} rows={5} {...register('message', { required: t(`${'error3'}`) })} />
            </div>
            <SendButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </>
  );
};