import * as yup from "yup";

export const ContactFormSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is not valid').required('Email is required'),
    message: yup.string().required('Message is required')
  })
  .required('All fields are required');

export type MailInputs = yup.InferType<typeof ContactFormSchema>;