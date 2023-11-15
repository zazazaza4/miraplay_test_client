import { useEffect } from 'react';
import NProgress from 'nprogress';

import { Spinner } from '@/components/spinner';

import 'nprogress/nprogress.css';

const ThemedSuspense = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });
  return <Spinner />;
};

export { ThemedSuspense };
