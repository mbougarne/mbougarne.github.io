import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Icon } from '@/components/icons';
import { IUserRole } from '@/types';

type RoleCardDetailProps = Pick<IUserRole, 'usersAssigned'>;

export const RoleCardDetail: FC<RoleCardDetailProps> = ({ usersAssigned }) => {
  return (
    <Box
      sx={{
        marginTop: '38px',
        color: 'colors.textBody',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="RolesIcon"
          sx={{
            overflow: 'visible',
          }}
        />
        <Typography
          variant="body2"
          component="span"
          sx={{
            textAlign: 'center',
          }}>
          {usersAssigned}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: '20px',
          textAlign: 'center',
        }}>
        <Typography
          variant="body1"
          component="span">
          Users Assigned
        </Typography>
      </Box>
    </Box>
  );
};
