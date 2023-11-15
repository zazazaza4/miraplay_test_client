import { useNavigate } from 'react-router-dom';
import { PiWarningCircleFill } from 'react-icons/pi';

import { Button } from '@/components/button';
import { ButtonColor } from '@/constants/enums';

import styles from './styles.module.scss';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.icon}>
          <PiWarningCircleFill color="red" size={45} />
        </div>
        <h4 className={styles.title}>помилка</h4>
        <p className={styles.text}>Упс, такої сторінки не існує!</p>
        <div className={styles.buttons}>
          <Button
            onClick={() => navigate('/')}
            color={ButtonColor.GREEN}
            className={styles.button}
          >
            На головну
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Page404 };
