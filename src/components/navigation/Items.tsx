import { FC } from 'react';
import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Icon, type IconName } from '@/components/icons';
import HoverPlaceholder from '@/assets/hover-effect.svg';

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
        <NavLink
          key={text}
          to={text}>
          {({ isActive }) => (
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                  '&:hover::before': {
                    content: "url('src/assets/hover-effect.svg')",
                    display: 'block',
                    fontSize: 5,
                    position: 'absolute',
                    zIndex: -1,
                  },
                  '&:hover .MuiSvgIcon-root': {
                    backgroundColor: '#258D54',
                    borderRadius: '50%',
                  },
                }}>
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
                  {isActive && (
                    <i
                      style={{
                        display: 'block',
                        marginLeft: '-12px',
                        fontSize: 5,
                        position: 'absolute',
                        zIndex: -1,
                      }}>
                      <HoverPlaceholder />
                    </i>
                  )}
                  <Icon
                    name={nameToSvg[text]}
                    sx={{
                      fontSize: 44,
                      padding: '7px',
                      color: '#fff',
                      textAlign: 'center',
                      alignSelf: 'center',
                      ...(isActive && {
                        backgroundColor: '#258D54',
                        borderRadius: '50%',
                      }),
                    }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          )}
        </NavLink>
      ))}
    </>
  );
};
