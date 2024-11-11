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
            color: '#C4C4C4',
          }}
        />
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Inter Variable, sans-serif',
          fontWeight: 'bold',
          fontSize: '22px',
          color: '#2B2F32',
          textAlign: 'center',
        }}>
        Admin
      </Typography>
    </Box>
  );
};
