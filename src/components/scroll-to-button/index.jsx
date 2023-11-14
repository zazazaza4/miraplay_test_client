import { useEffect, useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const ScrollUpButton = () => {
  const [yOffset, SetYOffset] = useState(0);

  const onScroll = (e) => {
    SetYOffset(e.currentTarget.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [yOffset]);

  return (
    <>
      {yOffset > 100 && (
        <motion.svg
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
          className={styles.up}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <BsArrowUpCircleFill size={35} color="white" />
        </motion.svg>
      )}
    </>
  );
};

export { ScrollUpButton };
