import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';

import { useDisableScroll } from '@/hooks/useDisableScroll';
import { setIsAuthOpen, getIsAuthOpen } from '@/store/slices/authFormSlice';
import { checkIsAuth } from '@/store/slices/authSlice';
import { Link } from '@/components/link';

import { navigationLinksMobile } from '../data';

import styles from './styles.module.scss';

const Menu = ({ isOpen, setIsOpen }) => {
  const isAuth = useSelector(checkIsAuth);
  const isAuthOpen = useSelector(getIsAuthOpen);
  const { toggleScroll } = useDisableScroll(isOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    toggleScroll(isOpen);
  }, [isOpen]);

  const handleAuthOpen = (event, to) => {
    event.preventDefault();

    if (isAuth) {
      setIsOpen(false);
      navigate(to);
    } else {
      setIsOpen(false);
      dispatch(setIsAuthOpen(!isAuthOpen));
    }
  };

  return (
    <div className={clsx(styles.menu, isOpen || styles.menuHidden)}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {navigationLinksMobile.map(({ isHover, label, to }) => (
            <Link
              key={label}
              className={styles.item}
              to={to}
              isHover={isHover}
              onClick={(e) => handleAuthOpen(e, to)}
            >
              <h5 className={styles.itemTitle}>{label}</h5>
            </Link>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={styles.closeButton}
        onClick={() => setIsOpen(false)}
      >
        <IoCloseOutline size={50} color="white" />
      </button>
    </div>
  );
};

export { Menu };
