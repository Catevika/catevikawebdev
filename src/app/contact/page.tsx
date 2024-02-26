'use client';
import { sendEmail } from '@/actions/sendEmail';
import styles from '@/app/contact/contact.module.css';
import SendButton from '@/components/SendButton/SendButton';
import type { FormValues } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const [ honeypot, setHoneypot ] = useState('Hey');

  return (
    <main className='container'>
      <div className={styles.contact__content}>
        <Image className={styles.contact__image} src={'/images/mail.png'} alt='' width={0}
          height={0} sizes='50vw' priority />
        <form className={styles.contact__form} action={sendEmail}>
          <label aria-hidden="true" htmlFor="name__verify" className={styles.contact__form__label__hide}>
            Humans will not fill out this field
            <input type="text" id="name__verify" name='name__verify' aria-hidden="true" autoComplete='off' onChange={(e) => setHoneypot(e.target.value)} value={honeypot} />
          </label>
          <div className={styles.contact__form__visible}>
            <div className={styles.contact__form__group}>
              <label className={styles.contact__form__label} htmlFor="name">Name</label>
              <input aria-invalid={errors.name ? "true" : "false"} className={styles.contact__form__input} type="text" id="name" placeholder="Jane Smith" autoComplete='name' {...register('name', { required: 'Name is required' })} />
              {errors.name ? <p role="alert">{errors.name.message}</p> : null}
            </div>
            <div className={styles.contact__form__group}>
              <label className={styles.contact__form__label} htmlFor="email">Email</label>
              <input aria-invalid={errors.email ? "true" : "false"} className={styles.contact__form__input} type="text" id="email" placeholder="jane.smith@example.com" autoComplete='email' {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
              {errors.email ? <p role="alert">{errors.email.message}</p> : null}
            </div>
            <div className={styles.contact__form__group}>
              <label className={styles.contact__form__label} htmlFor="message">Message</label>
              <textarea aria-invalid={errors.message ? "true" : "false"} className={styles.contact__form__textarea} id="message" placeholder="Tell me about your project!" rows={5} {...register('message', { required: 'Message is required' })} />
              {errors.message ? <p role="alert">{errors.message.message}</p> : null}
            </div>
            <SendButton />
          </div>
        </form>
      </div>
    </main>
  );
}