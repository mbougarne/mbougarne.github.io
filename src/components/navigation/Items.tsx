import { FC } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  useColorScheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Icon, type IconName } from '@/components/icons';
import HoverPlaceholder from '@/assets/hover-effect.svg';
import HoverPlaceholderDark from '@/assets/hover-effect-dark.svg';

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
  const { mode } = useColorScheme();

  const HoverEffect = () =>
    mode === 'dark' ? <HoverPlaceholderDark /> : <HoverPlaceholder />;
  const cssAfterSvg: string =
    mode === 'dark' ? 'hover-effect-dark' : 'hover-effect';

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
                    content: `url("/src/assets/${cssAfterSvg}.svg")`,
                    display: 'block',
                    fontSize: 5,
                    position: 'absolute',
                    zIndex: -1,
                  },
                  '&:hover .MuiBox-root': {
                    backgroundColor: 'colors.navIconHover',
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
                      <HoverEffect />
                    </i>
                  )}
                  <Icon
                    name={nameToSvg[text]}
                    sx={{
                      padding: '12px',
                      width: '44px',
                      height: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'colors.navIcon',
                      ...(isActive && {
                        backgroundColor: 'colors.navIconHover',
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
