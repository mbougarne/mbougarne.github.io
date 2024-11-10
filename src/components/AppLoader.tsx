import { LinearProgress, Stack } from '@mui/material';
import { common } from '@mui/material/colors';
import { FC } from 'react';

export const AppLoader: FC = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        backgroundColor: common.white,
      }}>
      <LinearProgress
        color="secondary"
        sx={{ height: 7 }}
      />
    </Stack>
  );
};
