import { useNavigate } from 'react-router-dom';

import { Image } from '@/components/image';
import { HOME_ROUTE } from '@/constants';

import logo from '@/assets/images/logo.svg';

import styles from './styles.module.scss';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate(HOME_ROUTE)}>
      <Image src={logo} className={styles.image} alt="logo" />
      <h1 className={styles.logoTitle}>MIRAPLAY</h1>
      <p className={styles.logoText}>Cloud Gaming</p>
    </div>
  );
};
export { Logo };
