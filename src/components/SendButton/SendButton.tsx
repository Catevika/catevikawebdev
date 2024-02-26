"use client";
import { useFormStatus } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SendButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" disabled={pending}>{pending ? 'Sending...' : 'Send'}</button>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
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