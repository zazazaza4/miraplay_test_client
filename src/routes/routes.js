import { lazy } from 'react';
import { HOME_ROUTE, GAMES_ROUTE } from '@/constants';

const Home = lazy(() => import('@/pages/Home'));

const Games = lazy(() => import('@/pages/Games'));

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: GAMES_ROUTE,
    Component: Games,
  },
];
