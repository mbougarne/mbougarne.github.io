import { FC } from 'react';
import { Box, CardContent } from '@mui/material';

import { RoleCardAvatar } from './Avatar';
import { RoleCardDetail } from './Detail';
import { RoleCardAction } from './Action';

export const RoleCardContent: FC = () => {
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
        <RoleCardAvatar />
        <RoleCardDetail />
        <RoleCardAction />
      </Box>
    </CardContent>
  );
};
