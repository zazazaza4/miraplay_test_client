import { useEffect, useState } from 'react';

const useDisableScroll = (disableTouch) => {
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  useEffect(() => {
    const preventDefault = (event) => {
      event.preventDefault();
    };

    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';

      if (disableTouch) {
        document.addEventListener('touchmove', preventDefault, {
          passive: false,
        });
      }
    } else {
      document.body.style.overflow = 'auto';

      if (disableTouch) {
        document.removeEventListener('touchmove', preventDefault);
      }
    }

    return () => {
      // Cleanup function to re-enable scroll when the component unmounts
      document.body.style.overflow = 'auto';

      if (disableTouch) {
        document.removeEventListener('touchmove', preventDefault);
      }
    };
  }, [isScrollDisabled, disableTouch]);

  const toggleScroll = (value) => {
    setIsScrollDisabled((prev) => (value !== undefined ? value : !prev));
  };

  return { isScrollDisabled, toggleScroll };
};

export { useDisableScroll };
