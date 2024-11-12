import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Icon } from '@/components/icons';

export const RoleCardAvatar: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: '-30px',
          height: 100,
          textAlign: 'center',
        }}>
        <Icon
          name="AdminIcon"
          sx={{
            overflow: 'visible',
            marginLeft: '-40px',
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
        }}>
        Admin
      </Typography>
    </Box>
  );
};
