import { FC, useContext, useEffect } from 'react';
import { Outlet, useFetcher } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Navigation } from './navigation';
import { Box } from '@mui/material';
import { userContext } from '@/store';

import { Header } from './Header';
import { ErrorNotification, SuccessNotification } from './notifications';

export const AppContainer: FC = () => {
  const fetcher = useFetcher();
  const { dispatch } = useContext(userContext);

  useEffect(() => {
    if (fetcher.data) {
      dispatch({
        type: 'set/roles',
        payload: {
          roles: fetcher.data,
        },
      });
    }
  }, [fetcher.data, dispatch]);

  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load('/');
    }
  }, [fetcher]);

  return (
    <>
      <CssBaseline />
      <Box>
        <Navigation />
      </Box>
      <Box
        component="main"
        sx={{
          bgcolor: 'colors.defaultBg',
          height: '100vh',
          width: 'calc(100% - 108px)',
          ml: '108px',
        }}>
        <Header />
        <SuccessNotification />
        <ErrorNotification />
        <Outlet />
      </Box>
    </>
  );
};
