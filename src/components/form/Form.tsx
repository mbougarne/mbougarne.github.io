import { FC } from 'react';
import { Box, Grow, Stack, Typography } from '@mui/material';
import {
  ActionButton,
  CustomRoleName,
  PermissionsContainer,
  RoleIcon,
  SelectRoleIcon,
} from './inputs';
import { textField, textFieldInput } from './styles';
import { ICreateUserRole, PermissionType } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExtractInputKeys<T> = Partial<Record<keyof T, any>>;
interface FormProps {
  disabled: boolean;
  values: ICreateUserRole & { id?: string };
  setValue: (v: ExtractInputKeys<ICreateUserRole>) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  onPermissionChange: (id: PermissionType, level: string) => void;
  onCancelClicked: () => void;
}

export const Form: FC<FormProps> = ({
  disabled,
  onSubmit,
  values,
  setValue,
  onPermissionChange,
  onCancelClicked,
}) => {
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <CustomRoleName
          sx={textField}
          slotSx={textFieldInput}
          name="name"
          value={values.name}
          onChange={(e) => setValue({ name: e.target.value })}
        />
        <SelectRoleIcon>
          <RoleIcon
            value={values.roleIcon}
            onChange={(_, newValue) => setValue({ roleIcon: newValue! })}
          />
        </SelectRoleIcon>
        <Box sx={{ marginTop: '24px', marginBottom: '12px' }}>
          <Typography
            variant="h2"
            component="h3"
            sx={{
              fontSize: '22px',
              color: 'colors.textHeadline',
            }}>
            Permissions
          </Typography>
        </Box>
        {/* Permissions Radio Buttons */}
        <PermissionsContainer
          onPermissionChange={onPermissionChange}
          values={values}
        />
        {/* Submit / Cancel: Buttons */}
        <Grow
          in={true}
          timeout={750}>
          <Box
            sx={{
              marginTop: '64px',
            }}>
            <Stack
              spacing={3}
              direction="row">
              <ActionButton
                title="Cancel"
                onClickHandler={onCancelClicked}
              />
              <ActionButton
                type="submit"
                title={disabled ? 'Custom Role Updating...' : 'Save Changes'}
                selected
                disabled={disabled}
              />
            </Stack>
          </Box>
        </Grow>
      </form>
    </Box>
  );
};
