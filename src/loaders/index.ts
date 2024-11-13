import { sendRequest } from '@/helpers';
import { IUserRole } from '@/types';

export const loadRoles = async () => {
  const response = await sendRequest({ endPoint: 'Roles' });
  const data: IUserRole[] = await response.json();

  if (!response.ok) {
    throw new Response('Cannot make request to Roles endpoint', {
      status: 500,
    });
  }

  return data;
};
