import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Page } from '@/pages/Page';
import { EditRoleForm } from '@/components/form';

export const EditRole: FC = () => {
  return (
    <Page
      title="Update Custom Role"
      showBackButton={true}>
      <Box
        sx={{
          marginTop: '24px',
        }}>
        <Typography
          variant="h3"
          component="p"
          sx={{
            color: 'colors.textSubtitle',
            marginBottom: '24px',
          }}>
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </Typography>
        <EditRoleForm />
      </Box>
    </Page>
  );
};
