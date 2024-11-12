import { FC } from 'react';
import { CardHeader, IconButton, Typography } from '@mui/material';
import { Icon } from '@/components/icons';

export const RoleCardHeader: FC = () => {
  return (
    <CardHeader
      action={
        <>
          <IconButton
            aria-label="edit role"
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <Icon
              name="EditIcon"
              sx={{ color: 'colors.textButtonCard' }}
            />
          </IconButton>
          <IconButton
            aria-label="delete role"
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <Icon
              name="DeleteIcon"
              sx={{ color: 'colors.textButtonCard' }}
            />
          </IconButton>
        </>
      }
      title={
        <Typography
          variant="subtitle2"
          sx={{ color: 'colors.textBody' }}>
          Default Role
        </Typography>
      }
    />
  );
};
