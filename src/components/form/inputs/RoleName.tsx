import { FC } from 'react';
import { Box, InputLabel, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material';

interface CustomRoleNameProps {
  sx?: SxProps<Theme>;
  slotSx?: SxProps<Theme>;
}

export const CustomRoleName: FC<CustomRoleNameProps> = ({ sx, slotSx }) => {
  const isError = false;
  return (
    <Box>
      <InputLabel
        htmlFor="custom-role-name-input"
        sx={{
          fontFamily: 'Inter Variable, sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          color: '#5E6366',
        }}>
        Custom Role Name
      </InputLabel>
      <TextField
        id="custom-role-name-input"
        placeholder="Input Custom Role Name"
        autoFocus={true}
        required={true}
        error={isError}
        helperText={isError && 'Something went wrong...'}
        slotProps={{
          input: {
            sx: slotSx,
          },
        }}
        sx={sx}
      />
    </Box>
  );
};
