import { FC } from 'react';
import { Link, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Icon, type IconName } from '@/components/icons';

const nameToSvg: Record<string, IconName> = {
  automations: 'AutomationsIcon',
  dashboard: 'DashboardIcon',
  facilities: 'FacilitiesIcon',
  integrations: 'IntegrationsIcon',
  locks: 'AuthIcon',
  reports: 'ReportsIcon',
  settings: 'SettingsIcon',
  team: 'RolesIcon',
};

export const Items: FC = () => {
  return (
    <>
      {[
        'dashboard',
        'locks',
        'team',
        'facilities',
        'automations',
        'reports',
        'integrations',
        'settings',
      ].map((text) => (
        <Link
          key={text}
          component={RouterLink}
          to={text}
          underline="none">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  width: 44,
                  height: 44,
                  marginY: '13px',
                  paddingX: '12px',
                  alignItems: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                }}>
                <Icon
                  name={nameToSvg[text]}
                  sx={{ fontSize: 36, color: '#fff' }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </>
  );
};
