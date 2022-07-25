import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const Router = () => {
  const el = useRoutes(routes);

  return el;
};
