import { FC } from 'react';
import { CardHeader, IconButton, Typography } from '@mui/material';
import { Icon } from '@/components/icons';

export const RoleCardHeader: FC = () => {
  return (
    <CardHeader
      action={
        <>
          <IconButton aria-label="edit role">
            <Icon name="EditIcon" />
          </IconButton>
          <IconButton aria-label="delete role">
            <Icon name="DeleteIcon" />
          </IconButton>
        </>
      }
      title={
        <Typography
          variant="caption"
          sx={{
            color: '#808285',
            fontFamily: 'Inter Variable, sans-serif',
            fontWeight: 400,
            fontSize: '12px',
          }}>
          Default Role
        </Typography>
      }
    />
  );
};
