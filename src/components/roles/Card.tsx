import { FC } from 'react';
import { Card } from '@mui/material';

import { RoleCardHeader } from './Header';
import { RoleCardContent } from './Content';

export const RoleCard: FC = () => {
  return (
    <Card
      sx={{
        width: 303,
        minHeight: 378,
        border: '1px solid #33C173',
        borderRadius: '8px',
        boxShadow: 'none',
        '&:hover': {
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        },
      }}>
      <RoleCardHeader />
      <RoleCardContent />
    </Card>
  );
};
