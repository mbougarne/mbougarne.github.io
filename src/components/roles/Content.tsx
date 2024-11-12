import { FC } from 'react';
import { Box, CardContent } from '@mui/material';

import { RoleCardAvatar } from './Avatar';
import { RoleCardDetail } from './Detail';
import { RoleCardAction } from './Action';
import { IUserRole } from '@/types';
import { useNavigate } from 'react-router-dom';

export const RoleCardContent: FC<{ role: IUserRole }> = ({ role }) => {
  const navigate = useNavigate();

  const onActionClicked = () => {
    navigate('add-role', { state: { role } });
  };

  return (
    <CardContent
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        height: 300,
        padding: 0,
      }}>
      <Box>
        <RoleCardAvatar
          name={role.name}
          roleIcon={role.roleIcon}
        />
        <RoleCardDetail usersAssigned={role.usersAssigned} />
        <RoleCardAction
          title="Use As Template"
          onClickHandler={onActionClicked}
        />
      </Box>
    </CardContent>
  );
};
