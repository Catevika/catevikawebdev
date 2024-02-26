
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

  const honeypot = formData.get('name__verify');
  if (honeypot !== 'Hey') {
    return console.log('Bot detected');
  } else {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      await resend.emails.send({
        from: 'Catevika Web Dev <contact@catevikawebdev.com>',
        to: [ 'contact@catevikawebdev.com' ],
        subject: `New Message from ${name}`,
        text: `Name: ${name}, Email: ${email}, Message: ${message}`,
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  };
};