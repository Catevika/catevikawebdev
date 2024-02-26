'use client';
import styles from '@/app/contact/contact.module.css';
import SendButton from '@/components/SendButton/SendButton';
import { ContactFormSchema, type MailInputs } from '@/utils/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import { sendEmail } from './_actions';

export default function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce
      });
      reset();
    } catch (error) {
      console.log({ error: result.error });

      toast.error('Email not sent. Please retry', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce
      });
    }
  };

  return (
    <main className='container'>
      <div className={styles.contact__content}>
        <Image className={styles.contact__image} src={'/images/mail.png'} alt='' width={0}
          height={0} sizes='50vw' priority />
        <form className={styles.contact__form} onSubmit={handleSubmit(processForm)}>
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
};