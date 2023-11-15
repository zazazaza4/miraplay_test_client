import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

import { Link } from '@/components/link';
import { Logo } from '@/components/logo';
import { Authorization } from '@/components/authorization';
import { checkIsAuth } from '@/store/slices/authSlice';
import { setIsAuthOpen, getIsAuthOpen } from '@/store/slices/authFormSlice';

import { navigationLinks } from './data';

import styles from './styles.module.scss';

const Header = () => {
  const isAuth = useSelector(checkIsAuth);
  const isAuthOpen = useSelector(getIsAuthOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthOpen = (event, to) => {
    event.preventDefault();

    if (isAuth) {
      navigate(to);
    } else {
      dispatch(setIsAuthOpen(!isAuthOpen));
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {navigationLinks.map(({ isHover, label, to }) => (
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
        </nav>

        <div className={styles.buttons}>
          <div className={styles.search}>
            <BiSearch color="white" size={20} />
          </div>
          <div
            className={styles.user}
            onClick={() => {
              isLogged: dispatch(setIsAuthOpen(!isAuthOpen));
            }}
          >
            <FaUser color="white" size={15} />
          </div>
        </div>
      </div>
      {!isAuth && <Authorization />}
    </header>
  );
};

export { Header };
