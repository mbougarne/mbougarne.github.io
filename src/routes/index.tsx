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
import { EditRole } from '@/pages/subpage/team';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RoutesError />,
    loader: loadRoles,
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
          },
          {
            path: 'team/add-role',
            element: <AddRole />,
          },
          {
            path: 'team/edit-role',
            element: <EditRole />,
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
