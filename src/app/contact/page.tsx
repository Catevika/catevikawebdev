'use client';

import { sendEmail } from '@/app/contact/_actions';
import styles from '@/app/contact/contact.module.css';
import SendButton from '@/components/SendButton/SendButton';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import { ContactFormSchema, type MailInputs } from '../../../schemas';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MailInputs>({
    resolver: yupResolver(ContactFormSchema),
    progressive: true
  });

  const [ honeypot, setHoneypot ] = useState('');

  if (honeypot) {
    console.log('Bot detected');
    return;
  }

  const processForm: SubmitHandler<MailInputs> = async (data) => {
    const result = await sendEmail(data);

    try {
      console.log({ data: result.data });

      toast.success('Email sent successfully', {
        position: "top-center",
        transition: Bounce,
        style: {
          color: 'hsl(80, 63%, 54%)',
          background: 'hsl(233, 100%, 8%)',
        },
        progressStyle: {
          background: 'hsl(80, 63%, 54%)',
        }
      });
      reset();
    } catch (error) {
      console.log({ error: result.error });

      toast.error('Email not sent. Please retry', {
        position: "top-center",
        transition: Bounce,
        style: {
          color: 'hsl(337, 63%, 54%)',
          background: 'hsl(233, 100%, 8%)',
        },
        progressStyle: {
          background: 'hsl(337, 63%, 54%)',
        }
      });
    }
  };

  return (
    <main className='container'>
      <div className={styles.contact__content}>
        <Image className={styles.contact__image} src={'/images/email.png'} alt='' width={0}
          height={0} sizes='50vw' priority />
        <form noValidate className={styles.contact__form} onSubmit={handleSubmit(processForm)}>
          <label aria-hidden="true" htmlFor="name__verify" className={styles.contact__form__label__hide}>
            Humans will not fill out this field
            <input type="text" id="name__verify" name='name__verify' aria-hidden="true" autoComplete='off' onChange={(e) => setHoneypot(e.target.value)} value={honeypot} />
          </label>
          <div className={styles.contact__form__visible}>
            <div className={styles.contact__form__group}>
              <label className={styles.contact__form__label} htmlFor="name">Name {errors.name ? <span role="alert" className={styles.contact__form__error} >{errors.name.message}</span> : null}</label>
              <input aria-invalid={errors.name ? "true" : "false"} className={styles.contact__form__input} type="text" id="name" placeholder="Jane Smith" autoComplete='name' {...register('name', { required: 'Enter your name' })} />
            </div>
            <div className={styles.contact__form__group}>
              <label className={styles.contact__form__label} htmlFor="email">Email {errors.email ? <span role="alert" className={styles.contact__form__error} >{errors.email.message}</span> : null}</label>
              <input aria-invalid={errors.email ? "true" : "false"} className={styles.contact__form__input} type="text" id="email" placeholder="jane.smith@example.com" autoComplete='email' {...register('email', { required: 'Enter a valid email address', pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' } })} />
            </div>
            <div className={styles.contact__form__group}>
              <label className={styles.contact__form__label} htmlFor="message">Message {errors.message ? <span role="alert" className={styles.contact__form__error} >{errors.message.message}</span> : null}</label>
              <textarea aria-invalid={errors.message ? "true" : "false"} className={styles.contact__form__textarea} id="message" placeholder="Tell me about your project!" rows={5} {...register('message', { required: 'Enter a message' })} />
            </div>
            <SendButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </main>
  );
};