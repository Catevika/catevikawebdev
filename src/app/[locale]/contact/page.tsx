import styles from '@/app/[locale]/contact/contact.module.css';
import ContactForm from '@/components/Forms/ContactForm';

export default function Contact() {

  return (
    <>
      <div className={styles.contact__content}>
        <ContactForm />
      </div>
    </>
  );
}