import { FC, PropsWithChildren } from 'react';
import { Box, Grow, InputLabel } from '@mui/material';

export const SelectRoleIcon: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grow
      in={true}
      timeout={750}>
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
        {children}
      </Box>
    </Grow>
  );
};
