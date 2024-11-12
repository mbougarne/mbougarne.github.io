import { FC, PropsWithChildren } from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  SxProps,
  Theme,
} from '@mui/material';

interface PermissionsButtonsProps {
  defaultValue: string;
  name: string;
  sx?: SxProps<Theme>;
  title: string;
}

export const PermissionsButtons: FC<
  PropsWithChildren<PermissionsButtonsProps>
> = ({ children, name, sx, title, defaultValue = '' }) => {
  return (
    <FormControl>
      <FormLabel
        id={name}
        sx={sx}>
        {title}
      </FormLabel>
      <RadioGroup
        aria-labelledby={name}
        defaultValue={defaultValue}
        name={name}
        defaultChecked
        row>
        {children}
      </RadioGroup>
    </FormControl>
  );
};
