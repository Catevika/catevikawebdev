'use client';

import {sendEmail} from '@/app/[locale]/contact/_actions';
import styles from '@/app/[locale]/contact/contact.module.css';
import SendButton from '@/components/Buttons/SendButton';
import type {ContactFormValues} from '@/types/types';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {useState} from 'react';
import {useForm, type SubmitHandler} from 'react-hook-form';
import toast from 'react-hot-toast';
import emailImg from '../../../public/images/email.png';

export default function ContactForm() {
	const t = useTranslations('Contact');

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors, isSubmitting},
	} = useForm<ContactFormValues>({
		progressive: true,
	});

	const [honeypot, setHoneypot] = useState('');

	if (honeypot) {
		console.log('Bot detected');
		return;
	}

	const processForm: SubmitHandler<ContactFormValues> = async (data) => {
		const result = await sendEmail(data);

		if (result.error) {
			toast.error(t('toastError'));
		} else {
			toast.success(t('toastSuccess'));
			reset();
		}
	};

	return (
		<>
			<div className={styles.contact__content__left}>
				<h3>{t('title')}</h3>
				<motion.div
					initial={{x: '-100vw'}}
					animate={{x: 0}}
					transition={{ease: 'easeInOut', duration: 1.5}}>
					<div className='image__container'>
						<Image
							className='image'
							src={emailImg}
							alt=''
							width={0}
							height={0}
							sizes='50vw'
							placeholder='blur'
							priority
						/>
					</div>
				</motion.div>
			</div>
			<motion.form
				initial={{x: '100vw'}}
				animate={{x: 0}}
				transition={{ease: 'easeInOut', duration: 1.5}}
				noValidate
				className='form'
				onSubmit={handleSubmit(processForm)}>
				<label
					aria-hidden='true'
					htmlFor='name__verify'
					className='form__label__hide'>
					Humans will not fill out this field
					<input
						type='text'
						id='name__verify'
						name='name__verify'
						aria-hidden='true'
						autoComplete='off'
						onChange={(e) => setHoneypot(e.target.value)}
						value={honeypot}
					/>
				</label>
				<div className='form__visible'>
					<div className='form__group'>
						<label
							className='form__label'
							htmlFor='name'>
							{t('label1')}{' '}
							{errors.name ?
								<span role='alert'>{errors.name.message}</span>
							:	null}
						</label>
						<input
							aria-invalid={errors.name ? 'true' : 'false'}
							className='form__input'
							type='text'
							id='name'
							placeholder={t('placeholder1')}
							autoComplete='name'
							{...register('name', {required: t('error1')})}
							title={t('infotool1')}
						/>
					</div>
					<div className='form__group'>
						<label
							className='form__label'
							htmlFor='email'>
							{t('label2')}{' '}
							{errors.email ?
								<span role='alert'>{errors.email.message}</span>
							:	null}
						</label>
						<input
							aria-invalid={errors.email ? 'true' : 'false'}
							className='form__input'
							type='text'
							id='email'
							placeholder={t('placeholder2')}
							autoComplete='email'
							{...register('email', {
								required: t('error2'),
								pattern: {value: /^\S+@\S+$/i, message: t('error2')},
							})}
							title={t('infotool2')}
						/>
					</div>
					<div className='form__group'>
						<label
							className='form__label'
							htmlFor='message'>
							{t('label3')}{' '}
							{errors.message ?
								<span role='alert'>{errors.message.message}</span>
							:	null}
						</label>
						<textarea
							aria-invalid={errors.message ? 'true' : 'false'}
							className='form__textarea'
							id='message'
							placeholder={t('placeholder3')}
							rows={5}
							{...register('message', {required: t('error3')})}
							title={t('infotool3')}
						/>
					</div>
					<SendButton disabled={isSubmitting} />
				</div>
			</motion.form>
		</>
	);
}
