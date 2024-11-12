import { FC } from 'react';
import { FormControlLabel, Radio, SxProps, Theme } from '@mui/material';

interface PermissionsButtonsProps {
  label: string;
  sx?: SxProps<Theme>;
  value: string;
}

export const PermissionsButtonControl: FC<PermissionsButtonsProps> = ({
  label,
  sx,
  value,
}) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={label}
      sx={sx}
    />
  );
};
