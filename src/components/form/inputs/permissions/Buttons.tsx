import { FC, PropsWithChildren } from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  SxProps,
  Theme,
} from '@mui/material';
import { AccessLevel } from '@/types';

interface PermissionsButtonsProps {
  defaultValue?: AccessLevel;
  name: string;
  sx?: SxProps<Theme>;
  title: string;
  value?: AccessLevel;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
}

export const PermissionsButtons: FC<
  PropsWithChildren<PermissionsButtonsProps>
> = ({ children, name, sx, title, onChange, defaultValue = '' }) => {
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
        onChange={onChange}
        row>
        {children}
      </RadioGroup>
    </FormControl>
  );
};
