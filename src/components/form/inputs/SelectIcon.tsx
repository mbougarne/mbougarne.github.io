import { FC } from 'react';
import { Box, InputLabel } from '@mui/material';
import { RoleIcon } from './RoleIcon';

export const SelectRoleIcon: FC = () => {
  return (
    <Box sx={{ marginTop: '24px' }}>
      <InputLabel
        htmlFor="select-role-icon"
        sx={{
          marginY: '10px',
          fontSize: '14px',
          color: 'colors.textButton',
        }}>
        Select Role Icon
      </InputLabel>
      <RoleIcon />
    </Box>
  );
};
