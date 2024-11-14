import { FC } from 'react';
import { Card, Grow } from '@mui/material';

import { RoleCardHeader } from './Header';
import { RoleCardContent } from './Content';
import { IUserRole } from '@/types';

interface RoleCardProps {
  role: IUserRole;
}

export const RoleCard: FC<RoleCardProps> = ({ role }) => {
  return (
    <Grow
      in={true}
      timeout={750}>
      <Card
        sx={{
          width: 303,
          minHeight: 378,
          border: '1px solid transparent',
          borderColor: 'primary.main',
          borderRadius: '8px',
          boxShadow: 'none',
          '&:hover': {
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          },
        }}>
        <RoleCardHeader role={role} />
        <RoleCardContent role={role} />
      </Card>
    </Grow>
  );
};
