import clsx from 'clsx';

import styles from './styles.module.scss';

const Spinner = ({ className }) => {
  return <div className={clsx(styles.loader, className)}></div>;
};

export { Spinner };
