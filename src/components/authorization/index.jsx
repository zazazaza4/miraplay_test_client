import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { IoCloseOutline, IoEye } from 'react-icons/io5';

import { Button } from '@/components/button';
import { Spinner } from '@/components/spinner';
import { ButtonColor } from '@/constants/enums';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import {
  getIsAuthOpen,
  getIsLoginMode,
  setIsLoginMode,
  setIsAuthOpen,
} from '@/store/slices/authFormSlice';
import { getIsLoading, registration, login } from '@/store/slices/authSlice';

import { emailValidation, passwordValidation } from './data';

import styles from './styles.module.scss';

const Authorization = () => {
  const isAuthOpen = useSelector(getIsAuthOpen);
  const isLoginMode = useSelector(getIsLoginMode);

  const isLoading = useSelector(getIsLoading);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { toggleScroll } = useDisableScroll(isAuthOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    toggleScroll(isAuthOpen);
  }, [isAuthOpen]);

  const onSubmit = async ({ email, password }) => {
    const formattedEmail = email.toLowerCase();

    if (isLoginMode) {
      const loginResult = await dispatch(
        login({ email: formattedEmail, password })
      );

      if (!loginResult.error) {
        await dispatch(setIsAuthOpen(false));
        navigate();
      }
    } else {
      const registrationResult = await dispatch(
        registration({ email: formattedEmail, password })
      );

      if (!registrationResult.error) {
        await dispatch(setIsAuthOpen(false));
      }
    }
  };

  return (
    <div
      className={clsx(
        styles.backdrop,
        isAuthOpen ? styles.backdropVisible : styles.backdropHidden
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(setIsAuthOpen(false));
        }
      }}
    >
      <div className={styles.content}>
        <div className={styles.buttons}>
          <button
            className={clsx(
              styles.authButton,
              isLoginMode && styles.authButton__active
            )}
            onClick={() => dispatch(setIsLoginMode(true))}
          >
            ВХІД
          </button>
          <button
            className={clsx(
              styles.authButton,
              !isLoginMode && styles.authButton__active
            )}
            onClick={() => dispatch(setIsLoginMode(false))}
          >
            РЕЄСТРАЦІЯ
          </button>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          key={isLoginMode}
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className={styles.title}>Спробуй нові відчуття</h3>
          <p className={styles.text}>
            Зареєструйся, щоб грати на максималках у свої улюблені ігри
          </p>
          <label className={styles.label}>
            введіть ваш email:
            <input
              className={clsx(styles.input, errors.email && styles.inputError)}
              type="text"
              name="email"
              placeholder="youremail@miraplay.com"
              {...register('email', { ...emailValidation })}
            />
            {errors.email && (
              <p className={styles.errors}>{errors.email.message}</p>
            )}
          </label>
          <label className={styles.label}>
            введіть ваш пароль:
            <input
              className={clsx(styles.input, errors.email && styles.inputError)}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="ваш пароль"
              name="password"
              {...register('password', { ...passwordValidation })}
            />
            <IoEye
              onClick={() => setIsPasswordVisible((pr) => !pr)}
              className={clsx(
                styles.eye,
                isPasswordVisible && styles.eyeSelected
              )}
            />
            {errors.password && (
              <p className={styles.errors}>{errors.password.message}</p>
            )}
          </label>
          <Button
            className={styles.submitButton}
            color={ButtonColor.GREEN}
            type="submit"
          >
            {isLoginMode ? 'ЛОГІН' : 'РЕЄСТРАЦІЯ'}
          </Button>
        </motion.form>

        <button
          type="button"
          className={styles.closeButton}
          onClick={() => dispatch(setIsAuthOpen(false))}
          disabled={isLoading}
        >
          <IoCloseOutline size={30} color="white" />
        </button>
      </div>
      {isLoading && <Spinner className={styles.loading} />}
    </div>
  );
};

export { Authorization };
