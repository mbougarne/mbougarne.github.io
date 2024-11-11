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
      }}>
      <RoleCardHeader />
      <RoleCardContent />
    </Card>
  );
};
