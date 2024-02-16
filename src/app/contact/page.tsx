"use client";
import styles from '@/app/contact/contact.module.css';
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from 'react-aria-components';
import { Controller, useForm } from 'react-hook-form';

type ContactData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: ContactData) => {
    console.log(data);
    reset();
  };

  return (
    <main className='container'>
      <Form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={{ required: 'Name is required.' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error }
          }) => (
            <TextField
              className={styles.contact__textfield}
              name={name}
              type="text"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              validationBehavior="aria"
              isInvalid={invalid}
            >
              <Label className={styles.contact__label}>Name</Label>
              <Input className={styles.contact__input} placeholder="Jane Smith" ref={ref} autoComplete='name' />
              <FieldError className={styles.contact__error}>{error?.message}</FieldError>
            </TextField>
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Entered value does not match email format'
            }
          }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { error }
          }) => (
            <TextField
              className={styles.contact__textfield}
              name={name}
              type="email"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              validationBehavior="aria"
              isInvalid={!!error}
            >
              <Label className={styles.contact__label}>Email</Label>
              <Input className={styles.contact__input} placeholder="jane.smith@example.com" ref={ref} autoComplete='email' />
              <FieldError className={styles.contact__error}>{error?.message}</FieldError>
            </TextField>
          )}
        />
        <Controller
          control={control}
          name="message"
          rules={{ required: 'Message is required.' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error }
          }) => (
            <TextField
              className={styles.contact__textfield}
              name={name}
              type="textarea"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              validationBehavior="aria"
              isInvalid={invalid}
            >
              <Label className={styles.contact__label}>Message</Label>
              <TextArea className={styles.contact__textarea} placeholder="Tell me about your project!" ref={ref} rows={5} />
              <FieldError className={styles.contact__error}>{error?.message}</FieldError>
            </TextField>
          )}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </main>
  );
}