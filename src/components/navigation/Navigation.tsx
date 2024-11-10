import { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Icon } from '@/components/icons/Icon';

import { Items } from './Items';

const drawerWidth = 108;

export const Navigation: FC = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#33C173',
          boxShadow: 'none',
          borderRight: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          overflowX: 'hidden',
        },
      }}
      variant="permanent"
      anchor="left">
      <Toolbar sx={{ display: 'block', alignSelf: 'normal', top: '-75px' }}>
        <Icon
          name="MannaLogo"
          sx={{ overflow: 'visible' }}
        />
      </Toolbar>
      <List>
        <Items />
      </List>
    </Drawer>
  );
};
