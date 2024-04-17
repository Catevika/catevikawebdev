"use client";

import { checkPostExists, createNewPost } from '@/app/[locale]/blog/newpost/_actions';
import SendButton from '@/components/Buttons/SendButton';
import styles from '@/components/Forms/newpostform.module.css';
import type { PostFormValues } from '@/types/types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function NewPostForm() {
  const t = useTranslations('NewPostPage');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<PostFormValues>({
    reValidateMode: 'onChange',
    mode: 'onBlur',
    defaultValues: {
      imageurl: '',
      title: '',
      content: ''
    }
  });

  const router = useRouter();

  const handleSubmitPost = async (formData: PostFormValues) => {
    const postExists = await checkPostExists(formData.title);

    if (JSON.parse(postExists)) {
      toast.error(t('toastExists'));
      reset();
      return null;
    }

    const newPost = await createNewPost(formData);

    if (!newPost) {
      toast.error(t('toastError'));
    } else {
      toast.success(t('toastSuccess'));
      router.push('/blog');
    }
  };

  return (
    <div className={styles.newPost__form}>
      <div className={styles.newPost__title}>
        <h3>{t('title')}</h3>
        <p><Link href={t('backlink')}>{t('linkback')}</Link></p>
      </div>
      <form noValidate className='form' onSubmit={handleSubmit(handleSubmitPost)}>
        <div className='form__group'>
          <label className='form__label' htmlFor="imageurl">{t('label1')} {errors.title ? <span role="alert">{t('error1')}</span> : null}</label>
          <input aria-invalid={errors.imageurl ? "true" : "false"} className='form__input' type="text" id="imageurl" placeholder={t('placeholder1')} {...register('imageurl', { maxLength: { value: 200, message: t('infotool1') } })} title={t('infotool1')} />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor="title">{t('label2')} {errors.title ? <span role="alert">{t('error2')}</span> : null}</label>
          <input aria-invalid={errors.title ? "true" : "false"} className='form__input' type="text" id="title" placeholder={t('placeholder2')} autoComplete='title' {...register('title', { required: t('error2'), maxLength: { value: 100, message: t('infotool2') } })} title={t('infotool2')} />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor="content">{t('label3')} {errors.content ? <span role="alert">{errors.content.message}</span> : null}</label>
          <textarea aria-invalid={errors.content ? "true" : "false"} className='form__textarea' id="content" placeholder={t('placeholder3')} rows={5} {...register('content', { required: t('error3') })} />
        </div>
        <SendButton disabled={isSubmitting} />
      </form>
    </div>
  );
}
