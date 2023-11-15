import { useRef } from 'react';
import SwiperCore from 'swiper';
import { motion } from 'framer-motion';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiSolidLeftArrow } from 'react-icons/bi';

import { SlideItem } from './slide-item';

import warriorImg from '@/assets/images/warrior.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './styles.module.scss';

const animation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.12, duration: 1.1 },
  }),
};

const Slide = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  SwiperCore.use([Autoplay, Navigation]);

  return (
    <div className={styles.slide}>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className={styles.swiper}
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={100}
        slidesPerView={1}
        centeredSlides
        autoplay={{ delay: 3000 }}
        loop
        variants={animation}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            className={styles.swiperSlideItem}
            title={
              <h1 className={styles.title}>
                Спробуй гру
                <span className={styles.thick}>DIABLO IMMORTAL</span>
                на ультрах
              </h1>
            }
            text={
              <>
                Даруємо{' '}
                <span className={styles.thick}>30 хвилин гри безкоштовно</span>{' '}
                після реєстрації на нашому сервісі
              </>
            }
            image={warriorImg}
            demoText={'Демо-період'}
            demoTitle={'30 хв.'}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            className={styles.swiperSlideItem}
            title={
              <h1 className={styles.title}>
                Спробуй гру
                <span className={styles.thick}>DIABLO IMMORTAL</span>
                на ультрах
              </h1>
            }
            text={
              <>
                Даруємо{' '}
                <span className={styles.thick}>30 хвилин гри безкоштовно</span>{' '}
                після реєстрації на нашому сервісі
              </>
            }
            image={warriorImg}
            demoText={'Демо-період'}
            demoTitle={'30 хв.'}
          />
        </SwiperSlide>
        <motion.button
          className={styles.nextSlide}
          ref={nextRef}
          whileTap={{ scale: 0.9 }}
        >
          <BiSolidLeftArrow size={30} className={styles.slideIconNext} />
        </motion.button>
        <motion.button
          className={styles.prevSlide}
          ref={prevRef}
          whileTap={{ scale: 0.9 }}
        >
          <BiSolidLeftArrow size={30} className={styles.slideIcon} />
        </motion.button>
      </Swiper>
    </div>
  );
};

export { Slide };
