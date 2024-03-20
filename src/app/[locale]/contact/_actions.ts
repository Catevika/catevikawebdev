'use server';

import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate';
import type { FormValues } from '@/types/types';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function sendEmail(formData: FormValues) {
  try {
    const { name, email } = formData;

    const data = await resend.emails.send({
      from: 'catevikawebdev.com <contact@catevikawebdev.com>',
      to: [ 'contact@catevikawebdev.com' ],
      subject: `New Message from ${name} - ${email}`,
      react: EmailTemplate(formData),
    });

    return data;
  } catch (error) {
    return { error };
  }
}