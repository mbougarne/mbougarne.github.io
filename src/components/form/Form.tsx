import { FC, FormEvent, useContext, useEffect, useState } from 'react';
import { Box, Grow, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useErrorNotification, useForm, useSuccessNotification } from '@/hooks';
import {
  AccessLevel,
  ICreateUserRole,
  IUpdateUserRole,
  PermissionType,
} from '@/types';
import { sendRequest } from '@/helpers';
import { userContext } from '@/store';
import {
  ActionButton,
  CustomRoleName,
  PermissionsContainer,
  RoleIcon,
  SelectRoleIcon,
} from './inputs';
import { textField, textFieldInput } from './styles';

interface FormProps {
  initialState: ICreateUserRole | IUpdateUserRole;
  endpoint: 'UpdateRole' | 'AddRole';
}

export const Form: FC<FormProps> = ({ initialState, endpoint }) => {
  const { dispatch } = useContext(userContext);
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { values, setValue, setFormState } =
    useForm<typeof initialState>(initialState);
  const { setSuccess } = useSuccessNotification();
  const { setError } = useErrorNotification();

  const abortController = new AbortController();

  useEffect(() => {
    if (location.state?.form) {
      const formData = location.state.form;
      setFormState(formData);
    }
  }, [location.state, setFormState, values]);

  const onCancelClicked = () => {
    setError('You canceled the adding role request.');
    abortController.abort('Submit request cancelled by the user');
    navigate(-1);
  };

  const onPermissionChange = (id: PermissionType, level: string) => {
    setValue({
      permissions: values.permissions.map((permission) => {
        if (permission.id === id) {
          permission.accessLevel = parseInt(level) as AccessLevel;
        }
        return permission;
      }),
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSuccess(
      endpoint === 'AddRole' ? 'Creating new role...' : 'Updating role...',
    );
    setDisabled(true);

    // To start with index zero, I can't make the select icon start at 0
    const data: ICreateUserRole = values;
    data.roleIcon = data.roleIcon === 0 ? data.roleIcon : data.roleIcon - 1;

    const result = await sendRequest(
      { endPoint: endpoint },
      abortController.signal,
      data,
    );
    const jsonData = await result.json();

    if (!result.ok) {
      const errorMessage = await result.text();
      setError(`${result.statusText}: ${errorMessage}`);
      setDisabled(false);
      return;
    }
    if (endpoint === 'AddRole') {
      dispatch({
        type: 'set/role',
        payload: {
          role: jsonData,
        },
      });
    } else {
      dispatch({
        type: 'set/update',
        payload: jsonData,
      });
    }

    setSuccess(
      endpoint === 'AddRole' ? 'The new role create' : 'The role updated',
    );
    navigate('/team', { replace: true });
  };

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
