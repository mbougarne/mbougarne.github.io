import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigation } from './navigation';
import { Box } from '@mui/material';

import { Header } from './Header';

export const AppContainer: FC = () => {
  return (
    <>
      {/* https://mui.com/material-ui/react-css-baseline/ */}
      <CssBaseline />
      <Box>
        <Navigation />
      </Box>
      <Box
        component="main"
        sx={{
          bgcolor: 'background.default',
          height: '100vh',
          width: 'calc(100% - 108px)',
          ml: '108px',
        }}>
        <Header />
        <Outlet />
      </Box>
    </>
  );
};