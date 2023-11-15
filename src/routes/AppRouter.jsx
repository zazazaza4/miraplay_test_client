import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { checkIsAuth } from '@/store/slices/authSlice';

import { ThemedSuspense } from '@/components/themed-suspence';
import { Page404 } from '@/pages/Page404';

import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  const isAuth = useSelector(checkIsAuth);

  return (
    <Suspense fallback={<ThemedSuspense />}>
      <Routes>
        {isAuth
          ? privateRoutes.map(({ path, Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })
          : publicRoutes.map(({ path, Component }) => {
              return <Route path={path} key={path} element={<Component />} />;
            })}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
