import { FC, FormEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useErrorNotification, useForm, useSuccessNotification } from '@/hooks';
import { AccessLevel, ICreateUserRole, PermissionType } from '@/types';
import { sendRequest } from '@/helpers';
import { userContext } from '@/store';

import { Form } from './Form';

export const AddRoleForm: FC = () => {
  const { dispatch } = useContext(userContext);
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { values, setValue, setFormState } = useForm<ICreateUserRole>({
    name: '',
    roleIcon: 1,
    permissions: [
      { id: PermissionType.Locks, accessLevel: AccessLevel.None },
      { id: PermissionType.ActivateLocks, accessLevel: AccessLevel.None },
      { id: PermissionType.Inventory, accessLevel: AccessLevel.None },
      { id: PermissionType.TenantLocks, accessLevel: AccessLevel.None },
      { id: PermissionType.Facilities, accessLevel: AccessLevel.None },
      { id: PermissionType.TransferFacilities, accessLevel: AccessLevel.None },
      { id: PermissionType.Users, accessLevel: AccessLevel.None },
      { id: PermissionType.EditAdmins, accessLevel: AccessLevel.None },
      { id: PermissionType.Subdomains, accessLevel: AccessLevel.None },
      { id: PermissionType.ApiSettings, accessLevel: AccessLevel.None },
    ],
  });
  const { setSuccess } = useSuccessNotification();
  const { setError } = useErrorNotification();

  const abortController = new AbortController();

  useEffect(() => {
    if (location.state?.form) {
      const formData = location.state.form;
      setFormState(formData);
    }
  }, [location.state, setFormState]);

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

    setSuccess('Creating new role...');
    setDisabled(true);

    // To start with index zero, I can't make the select icon start at 0
    const data: ICreateUserRole = values;
    data.roleIcon = data.roleIcon === 0 ? data.roleIcon : data.roleIcon - 1;

    const result = await sendRequest(
      { endPoint: 'AddRole' },
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

    dispatch({
      type: 'set/role',
      payload: {
        role: jsonData,
      },
    });

    setSuccess('The new role created');
    navigate('/team', { replace: true });
  };

  return (
    <Form
      disabled={disabled}
      onCancelClicked={onCancelClicked}
      onPermissionChange={onPermissionChange}
      onSubmit={onSubmit}
      setValue={setValue}
      values={values}
    />
  );
};
