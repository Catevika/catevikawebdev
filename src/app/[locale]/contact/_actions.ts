'use server';

import { EmailTemplate } from '@/components/Contact/EmailTemplate/EmailTemplate';
import type { ContactFormValues } from '@/types/types';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function sendEmail(formData: ContactFormValues) {
  try {
    const { name, email } = formData;

    const data = await resend.emails.send({
      from: 'Catevika Web Dev <contact@catevikawebdev.com>',
      to: ['catevikawebdev@outlook.fr'],
      subject: `New Message from ${name} - ${email}`,
      react: EmailTemplate(formData),
    });

    return data;
  } catch (error) {
    return { error };
  }
}