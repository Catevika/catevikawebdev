import styles from '@/app/[locale]/contact/contact.module.css';
import ContactForm from '@/components/Forms/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {

  return (
    <>
      <div className={styles.contact__content}>
        <ContactForm />
      </div>
    </>
  );
}