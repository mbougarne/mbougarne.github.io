import { sendRequest } from '@/helpers';

export const loadRoles = async () => {
  const result = await sendRequest({ endPoint: 'Roles' });
  return result;
};
