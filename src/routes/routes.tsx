import { RouteObject } from 'react-router-dom';

import { AppLayout } from '../layouts';

import CorePage from '../pages/CorePage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <CorePage /> }]
  }
];
