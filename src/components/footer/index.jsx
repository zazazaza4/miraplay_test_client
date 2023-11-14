import clsx from 'clsx';
import { motion } from 'framer-motion';

import { Image } from '@/components/image';
import { Logo } from '@/components/logo';
import { Link } from '@/components/link';

import visaImg from '@/assets/images/visa_master.png';
import platonImg from '@/assets/images/platon.png';

import { cabinet, categories, info, socials } from './data';

import styles from './styles.module.scss';

const animation = {
  hidden: {
    y: 75,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.15, duration: 0.3 },
  }),
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <motion.div className={styles.block}>
          <Logo />
          <div className={styles.payments}>
            <Image
              src={visaImg}
              className={styles.visaMaster}
              alt="visa mastercard"
            />
            <Image
              src={platonImg}
              className={styles.platon}
              alt="platon logo"
            />
          </div>

          <ul className={styles.socials}>
            {socials.map(({ Icon, link }, i) => (
              <li key={i}>
                <Link to={link} target="_blank" isHover={false}>
                  <Icon size={20} />
                </Link>
              </li>
            ))}
          </ul>
          <Link className={styles.contract} to="#" isHover={false}>
            Угода користувача
          </Link>
          <motion.p
            className={styles.text}
            variants={animation}
            initial="hidden"
            whileInView="visible"
            custom={5}
          >
            ТОВ Дока Проект ЄДРПОУ 41204288
          </motion.p>
          <motion.p
            className={styles.copyright}
            variants={animation}
            initial="hidden"
            whileInView="visible"
            custom={6}
          >
            Copyright © {new Date().getFullYear()} Miraplay
          </motion.p>
        </motion.div>

        <div className={styles.block}>
          <h4 className={styles.title}>Категорії</h4>
          <ul className={styles.list}>
            {categories.map(({ title, link }, i) => {
              return (
                <motion.li
                  className={clsx(styles.item, i === 0 && styles.game)}
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  variants={animation}
                >
                  <Link to={link}>{title}</Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className={styles.block}>
          <h4 className={styles.title}>особистий кабінет</h4>
          <ul className={styles.list}>
            {cabinet.map(({ title, link }, i) => {
              return (
                <motion.li
                  className={styles.item}
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  variants={animation}
                >
                  <Link to={link}>{title}</Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className={styles.block}>
          <h4 className={styles.title}>Наша інформація</h4>
          <ul className={styles.list}>
            {info.map(({ title, link, Icon }, i) => {
              return (
                <motion.li
                  className={styles.item}
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  variants={animation}
                >
                  <Link
                    className={clsx(
                      styles.link,
                      i === info.length - 1 && styles.downloadLink
                    )}
                    to={link}
                    target="_blank"
                    isHover={false}
                  >
                    {' '}
                    <div
                      className={clsx(
                        styles.box,
                        i === info.length - 1 && styles.downolad
                      )}
                    >
                      <Icon fill="white" />
                    </div>
                    {title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.greenLight}></div>
    </footer>
  );
};
export { Footer };
