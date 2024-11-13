import { FC } from 'react';
import { FormControlLabel, Radio, SxProps, Theme } from '@mui/material';
import { AccessLevel } from '@/types';

interface PermissionsButtonsProps {
  label: string;
  sx?: SxProps<Theme>;
  value: AccessLevel;
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
