import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Icon } from '@/components/icons';

export const RoleCardDetail: FC = () => {
  return (
    <Box
      sx={{
        marginTop: '38px',
        color: '#808285',
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
          variant="h4"
          component="span"
          sx={{
            fontFamily: 'Inter Variable, sans-serif',
            fontWeight: 'bold',
            fontSize: '22px',
            textAlign: 'center',
          }}>
          1,386
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: '20px',
          textAlign: 'center',
        }}>
        <Typography
          variant="h4"
          component="span"
          sx={{
            fontFamily: 'Inter Variable, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            textAlign: 'center',
          }}>
          Users Assigned
        </Typography>
      </Box>
    </Box>
  );
};
