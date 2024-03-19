"use client";
import { useTranslations } from 'next-intl';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function SendButton({ isSubmitting }: { isSubmitting: boolean; }) {
  const t = useTranslations('SendButton');
  return (
    <>
      <button type="submit" disabled={isSubmitting}>{isSubmitting ? t('Sending') : t('Send')}</button>
      <ToastContainer
        autoClose={2500}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default SendButton;