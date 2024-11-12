import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '@/App';
import {
  AddRole,
  Automations,
  Dashboard,
  Facilities,
  Integrations,
  Locks,
  Reports,
  Settings,
  Team,
  TeamOutlet,
} from '@/pages';
import { RoutesError } from '@/components';
import { loadRoles } from '@/loaders';
import { IUserRole } from '@/types';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RoutesError />,
    children: [
      {
        index: true,
        element: <Navigate to="/team/" />,
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
        element: <TeamOutlet />,
        children: [
          {
            path: 'team',
            element: <Team />,
            loader: async () => {
              const response = await loadRoles();
              const data: IUserRole[] = await response.json();

              if (!response.ok) {
                throw new Response('Cannot make request to Roles endpoint', {
                  status: 500,
                });
              }

              return data;
            },
          },
          {
            path: 'team/add-role',
            element: <AddRole />,
          },
        ],
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
