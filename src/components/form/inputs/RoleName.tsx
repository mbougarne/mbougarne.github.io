import { ChangeEventHandler, FC } from 'react';
import { Box, Grow, InputLabel, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material';

interface CustomRoleNameProps {
  sx?: SxProps<Theme>;
  slotSx?: SxProps<Theme>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
}

export const CustomRoleName: FC<CustomRoleNameProps> = ({
  sx,
  slotSx,
  value,
  onChange,
  name,
}) => {
  const isError = false;
  return (
    <Grow
      in={true}
      timeout={750}>
      <Box>
        <InputLabel
          htmlFor="custom-role-name-input"
          sx={{
            fontSize: '14px',
            color: 'colors.textButton',
          }}>
          Custom Role Name
        </InputLabel>
        <TextField
          value={value}
          onChange={onChange}
          id="custom-role-name-input"
          placeholder="Input Custom Role Name"
          name={name}
          autoComplete="off"
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
    </Grow>
  );
};
