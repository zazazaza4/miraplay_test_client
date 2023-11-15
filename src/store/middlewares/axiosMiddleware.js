import { toast } from 'react-toastify';

const toastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const axiosMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type.endsWith('/rejected')) {
      const errorMessage = action.payload?.message || 'Сталася помилка!';

      toast.error(errorMessage, toastOptions);
    } else if (action.type.endsWith('/fulfilled')) {
      const successMessage = action.payload?.message || 'Успіх!';

      toast.success(successMessage, toastOptions);
    }

    return next(action);
  };

export { axiosMiddleware };
