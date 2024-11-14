import { FC } from 'react';
import { ICreateUserRole } from '@/types';

import { Form } from './Form';

interface FormProps {
  initialState: ICreateUserRole;
}

export const AddRoleForm: FC<FormProps> = ({ initialState }) => {
  return (
    <Form
      initialState={initialState}
      endpoint="AddRole"
    />
  );
};
