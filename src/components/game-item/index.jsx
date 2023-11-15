import { useEffect } from 'react';
import clsx from 'clsx';
import { IoCloseOutline } from 'react-icons/io5';

import { useDisableScroll } from '@/hooks/useDisableScroll';
import { Image } from '@/components/image';
import { Logo } from '@/components/logo';

import styles from './styles.module.scss';

function GameItem({ game, isVisible, setCard }) {
  const { toggleScroll } = useDisableScroll(isVisible);

  useEffect(() => {
    toggleScroll(isVisible);
  }, [isVisible]);

  if (!isVisible) {
    return;
  }

  return (
    <div className={clsx(styles.backdrop, isVisible || styles.backdropHidden)}>
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <Logo />
        </div>

        <h2 className={styles.title}>{game.commonGameName}</h2>
        <p className={styles.text}>{game.gameDescription}</p>
        <Image
          className={styles.image}
          src={game.gameImage}
          alt={game.gameImage}
        />
      </div>

      <button
        type="button"
        className={styles.closeButton}
        onClick={() => setCard(null)}
      >
        <IoCloseOutline size={40} color="white" />
      </button>
    </div>
  );
}

export { GameItem };
