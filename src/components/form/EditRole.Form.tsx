import { FC, FormEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useErrorNotification, useForm, useSuccessNotification } from '@/hooks';
import { AccessLevel, PermissionType, UserFormState } from '@/types';
import { sendRequest } from '@/helpers';
import { userContext } from '@/store';

import { Form } from './Form';

type InitialType = UserFormState & { id?: string };

export const EditRoleForm: FC = () => {
  const { dispatch } = useContext(userContext);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isInit, setInit] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { values, setValue, setFormState } = useForm<InitialType>();
  const { setSuccess } = useSuccessNotification();
  const { setError } = useErrorNotification();

  const abortController = new AbortController();

  useEffect(() => {
    if (location.state?.form) {
      const formData = location.state.form;
      setFormState(formData);
      setInit(true);
    }
  }, [location.state, setFormState]);

  const onCancelClicked = () => {
    setError('You canceled the updating role request.');
    abortController.abort('Submit request cancelled by the user');
    navigate(-1);
  };

  const onPermissionChange = (id: PermissionType, level: string) => {
    setValue({
      permissions: [
        ...values.permissions.map((permission) => {
          if (permission.id === id) {
            permission.accessLevel = parseInt(level) as AccessLevel;
          }
          return permission;
        }),
      ],
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSuccess('Updating role...');
    setDisabled(true);

    // To start with index zero, I can't make the select icon start at 0
    const data: InitialType = values;
    data.roleIcon = data.roleIcon === 0 ? data.roleIcon : data.roleIcon - 1;

    const result = await sendRequest(
      { endPoint: 'UpdateRole', id: values.id },
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
      type: 'set/update',
      payload: {
        role: jsonData,
      },
    });

    setSuccess('The role updated');
    navigate('/team', { replace: true });
  };

  return (
    isInit && (
      <Form
        disabled={disabled}
        onCancelClicked={onCancelClicked}
        onPermissionChange={onPermissionChange}
        onSubmit={onSubmit}
        setValue={setValue}
        values={values}
      />
    )
  );
};
