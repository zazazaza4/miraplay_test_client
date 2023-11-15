import clsx from 'clsx';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { AiFillWindows, AiFillApple } from 'react-icons/ai';

import { Button } from '@/components/button';
import { Image } from '@/components/image';
import { ButtonColor } from '@/constants/enums';

import styles from './styles.module.scss';

const animation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.15, duration: 1 },
  }),
};

const SlideItem = ({ title, text, image, className, demoTitle, demoText }) => {
  return (
    <>
      <div className={clsx(styles.slideItem, className)}>
        <motion.div
          className={styles.title}
          variants={animation}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          {title}
        </motion.div>
        <motion.p
          className={styles.text}
          variants={animation}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {text}
        </motion.p>
        <div className={styles.buttons}>
          <Button
            color={ButtonColor.GREEN_OUTLINE}
            isSkew
            className={styles.button}
          >
            ПОЧАТИ ГРАТИ
          </Button>
          <Button className={styles.download}>
            Завантажити кліент
            <AiFillWindows className={styles.icon} />
            <AiFillApple className={clsx(styles.icon, styles.apple)} />
            <p className={styles.downloadText}>Windows (x64), MacOs 10.14+</p>
          </Button>

          <div className={styles.demo}>
            <h5 className={styles.demoTitle}>{demoTitle}</h5>
            <p className={styles.demoText}>{demoText}</p>
          </div>
        </div>
      </div>
      <Image src={image} className={styles.image} alt={''} />
    </>
  );
};

SlideItem.propTypes = {
  className: PropTypes.string,
};

export { SlideItem };
