import React from 'react';
import { ToastContainer, toast, Id, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastifyContainer = () => (
  <ToastContainer
    position='top-center'
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    theme='colored'
    transition={Zoom}
  />
);

let toastId;

export const toastifyFunc = (status, message) => {
  if (status === 'pending') {
    const render = message || 'Plese Wait...';
    toastId = toast.loading(render);
  }
  if (status === 'dismiss') return toast.dismiss();
  else {
    if (status === 'fulfilled') {
      const render = message || 'Success!';
      return toast.update(toastId, {
        render,
        type: 'success',
        isLoading: false,
        toastId: status,
        closeButton: true,
        autoClose: 5000,
      });
    }

    if (status === 'rejected') {
      const render = message || 'Something went wrong!';
      return toast.update(toastId, {
        render,
        type: 'error',
        isLoading: false,
        toastId: status,
        closeButton: true,
        autoClose: 5000,
      });
    }
  }
  return status;
};
