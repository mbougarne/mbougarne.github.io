import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Page } from '@/pages/Page';
import { RolesForm } from '@/components/form';

export const AddRole: FC = () => {
  return (
    <Page
      title="Create Custom Role"
      showBackButton={true}>
      <Box
        sx={{
          marginTop: '24px',
        }}>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontFamily: 'Inter Variable, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#83898C',
            marginBottom: '24px',
          }}>
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </Typography>
        <RolesForm />
      </Box>
    </Page>
  );
};
