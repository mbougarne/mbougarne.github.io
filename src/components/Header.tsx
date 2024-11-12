import { FC } from 'react';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { Icon } from './icons';

export const Header: FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: '64px',
        width: `calc(100% - 108px)`,
        ml: `108px`,
        backgroundColor: 'colors.topBarBg',
        boxShadow: 'none',
        alignItems: 'flex-end',
      }}>
      <Toolbar sx={{ alignItems: 'center' }}>
        <Typography
          variant="h3"
          noWrap
          component="p"
          sx={{
            color: 'colors.textHeadline',
            marginRight: '12px',
          }}>
          Mathew Keller
        </Typography>
        <Link
          component={RouteLink}
          to="/team"
          underline="none"
          sx={{ lineHeight: 0 }}>
          <Icon name="LogoutIcon" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
