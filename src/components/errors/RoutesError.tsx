import { useRouteError } from 'react-router-dom';
import { Alert, AlertTitle, Stack, Typography } from '@mui/material';
import { common } from '@mui/material/colors';

export const RoutesError = () => {
  const error = useRouteError() as Record<string, string>;

  return (
    <Stack
      sx={{
        height: '100vh',
        backgroundColor: common.white,
      }}>
      <Alert severity="error">
        <AlertTitle>Oops!</AlertTitle>
        <Typography
          variant="h5"
          component="h5">
          Sorry, an unexpected error has occurred
        </Typography>
        <Typography
          variant="body1"
          component="p">
          {error.statusText || error.message}
        </Typography>
      </Alert>
    </Stack>
  );
};
