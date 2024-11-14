import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Icon, IconName } from '@/components/icons';
import { IUserRole } from '@/types';

type RoleCardAvatarProps = Pick<IUserRole, 'name' | 'roleIcon'>;

const iconIndexName: Record<number, IconName> = {
  0: 'AdminIcon',
  1: 'PersonnelIcon',
  2: 'AdminLockIcon',
  3: 'VendorIcon',
  4: 'CallCenterAgentIcon',
};

export const RoleCardAvatar: FC<RoleCardAvatarProps> = ({ name, roleIcon }) => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: '-30px',
          height: 100,
          textAlign: 'center',
        }}>
        <Icon
          name={iconIndexName[roleIcon]}
          sx={{
            overflow: 'visible',
            color: 'colors.cardIcon',
          }}
        />
      </Box>
      <Typography
        variant="h2"
        component="h4"
        sx={{
          color: 'colors.textHeadline',
          textAlign: 'center',
          textTransform: 'capitalize',
        }}>
        {name}
      </Typography>
    </Box>
  );
};
