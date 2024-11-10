import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '@/App';
import {
  Automations,
  Dashboard,
  Facilities,
  Integrations,
  Locks,
  Reports,
  Settings,
  Team,
} from '@/pages';
import { RoutesError } from '@/components';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RoutesError />,
    children: [
      {
        index: true,
        element: <Navigate to="/team" />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'locks',
        element: <Locks />,
      },
      {
        index: true,
        path: 'team',
        element: <Team />,
      },
      {
        path: 'facilities',
        element: <Facilities />,
      },
      {
        path: 'automations',
        element: <Automations />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'integrations',
        element: <Integrations />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);
