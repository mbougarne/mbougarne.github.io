import { ICreateUserRole, IUpdateUserRole } from '@/types';

type EndPoint = 'DeleteRole' | 'UpdateRole' | 'AddRole' | 'Roles';
type GetUrlProps = {
  endPoint: EndPoint;
  id?: string;
};
type GenerateReturn = {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  method: (...args: any[]) => Promise<Response>;
};

const IDENTIFIER = 'mmourada';
const BASE_URL: string = 'https://googlereviewsolicitor.azurewebsites.net/api/';

export const sendRequest = async (
  { endPoint, id }: GetUrlProps,
  signal?: AbortSignal,
  data?: ICreateUserRole | IUpdateUserRole,
) => {
  const url = generateUrl({ endPoint, id });
  if (['AddRole', 'UpdateRole'].includes(endPoint)) {
    return await url.method(url.path, data, signal);
  }

  return await url.method(url.path, signal);
};

const generateUrl = ({ endPoint, id }: GetUrlProps): GenerateReturn => {
  const endpoints: Record<EndPoint, GenerateReturn> = {
    ...(endPoint === 'Roles' &&
      id !== undefined && {
        Roles: {
          path: `${BASE_URL}Roles/${id}?identifier=${IDENTIFIER}`,
          method: getRequest,
        },
      }),
    Roles: {
      path: `${BASE_URL}Roles?identifier=${IDENTIFIER}`,
      method: getRequest,
    },
    AddRole: {
      path: `${BASE_URL}AddRole?identifier=${IDENTIFIER}`,
      method: postRequest,
    },
    DeleteRole: {
      path: `${BASE_URL}DeleteRole/${id}?identifier=${IDENTIFIER}`,
      method: deleteRequest,
    },
    UpdateRole: {
      path: `${BASE_URL}UpdateRole?identifier=${IDENTIFIER}`,
      method: putRequest,
    },
  };

  return endpoints[endPoint];
};

const getRequest = async (url: string, signal?: AbortSignal) => {
  const request = await fetch(url, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request;
};

const postRequest = async (
  url: string,
  data: ICreateUserRole,
  signal?: AbortSignal,
) => {
  const request = await fetch(url, {
    method: 'POST',
    signal,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request;
};

const putRequest = async (
  url: string,
  data: IUpdateUserRole,
  signal?: AbortSignal,
) => {
  const request = await fetch(url, {
    method: 'PUT',
    signal,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request;
};

const deleteRequest = async (url: string, signal?: AbortSignal) => {
  const request = await fetch(url, {
    method: 'DELETE',
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request;
};
