import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigation } from './navigation';
import { Box, Container } from '@mui/material';

import { Header } from './Header';

export const AppContainer: FC = () => {
  return (
    <>
      {/* https://mui.com/material-ui/react-css-baseline/ */}
      <CssBaseline />
      <Container maxWidth="sm">
        <Box>
          <Navigation />
        </Box>
        <Box
          component="main"
          sx={{ bgcolor: 'background.default', height: '100vh' }}>
          <Header />
          <Outlet />
        </Box>
      </Container>
    </>
  );
};
