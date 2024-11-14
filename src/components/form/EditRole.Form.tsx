import { FC } from 'react';
import { IUpdateUserRole } from '@/types';
import { Form } from './Form';

interface FormProps {
  initialState: IUpdateUserRole;
}

export const EditRoleForm: FC<FormProps> = ({ initialState }) => {
  return (
    <Form
      initialState={initialState}
      endpoint="UpdateRole"
    />
  );
};
