"use client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function SendButton({ isSubmitting }: { isSubmitting: boolean; }) {
  return (
    <>
      <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</button>
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