import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose, IoMenu } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

import { getIsAuthOpen, setIsAuthOpen } from '@/store/slices/authFormSlice';
import { checkIsAuth } from '@/store/slices/authSlice';
import { Logo } from '@/components/logo';
import { Authorization } from '@/components/authorization';

import { Menu } from './menu';

import styles from './styles.module.scss';

const HeaderMobile = () => {
  const isAuth = useSelector(checkIsAuth);
  const isAuthOpen = useSelector(getIsAuthOpen);

  const [isMenu, setIsMenu] = useState(false);

  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.right}>
          <div
            className={styles.user}
            onClick={() => {
              dispatch(setIsAuthOpen(!isAuthOpen));
            }}
          >
            <FaUser color="white" size={15} />
          </div>

          <button
            className={styles.menuBtn}
            onClick={() => setIsMenu((prev) => !prev)}
          >
            {isMenu ? (
              <IoClose color="white" size={25} />
            ) : (
              <IoMenu color="white" size={25} />
            )}
          </button>
        </div>
      </div>

      {!isAuth && <Authorization />}
      <Menu isOpen={isMenu} setIsOpen={setIsMenu} />
    </header>
  );
};

export { HeaderMobile };
