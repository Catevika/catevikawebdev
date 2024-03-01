import * as yup from "yup";

export const ContactFormSchema = yup
  .object({
    name: yup.string().required('Write your name'),
    email: yup.string().email('Write a valid email address').required('Write a valid email address'),
    message: yup.string().required('Write a message'),
  })
  .required('All fields are required');

export type MailInputs = yup.InferType<typeof ContactFormSchema>;