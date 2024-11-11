import { FC } from 'react';
import { Page } from './Page';
import { Box } from '@mui/material';
import { RoleCard } from '@/components/roles';

export const Team: FC = () => {
  return (
    <Page title="User Roles">
      <Box
        sx={{
          marginTop: '24px',
        }}>
        <RoleCard />
      </Box>
    </Page>
  );
};
