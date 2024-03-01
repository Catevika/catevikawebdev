'use server';

import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';
import { type MailInputs } from '../../../schemas';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function sendEmail(formData: MailInputs) {
  try {
    const { name, email } = formData;

    const data = await resend.emails.send({
      from: 'Catevika Web Dev <contact@catevikawebdev.com>',
      to: [ 'dominique.bello@outlook.fr' ],
      subject: `New Message from ${name} - ${email}`,
      react: EmailTemplate(formData),
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}