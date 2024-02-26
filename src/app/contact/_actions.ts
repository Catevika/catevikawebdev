'use server';

import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate';
import { type MailInputs } from '@/utils/schemas';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function sendEmail(formData: MailInputs) {
  try {
    const { name, email, message } = formData;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [ 'dominique.bello@outlook.fr' ],
      subject: `New Message from ${name} - ${email}`,
      react: EmailTemplate(`${message}`),
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}