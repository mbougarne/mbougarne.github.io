import { createContext, Dispatch } from 'react';
import { IUserRole } from '@/types';

export interface InitialContextStateInterface {
  roles: IUserRole[];
  notification: string;
  error: string;
  role?: IUserRole;
  showDelete?: boolean;
}

type DispatchType =
  | 'set/notification'
  | 'set/error'
  | 'set/roles'
  | 'set/role'
  | 'set/delete';

interface DispatcherInterface {
  type: DispatchType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: Partial<Record<keyof InitialContextStateInterface, any>>;
}

export const initialState: InitialContextStateInterface = {
  roles: [],
  notification: '',
  error: '',
};

export const mainReducer = (
  state: InitialContextStateInterface = initialState,
  { type, payload }: DispatcherInterface,
) => {
  switch (type) {
    case 'set/notification': {
      return {
        ...state,
        notification: payload.notification,
      };
    }
    case 'set/error': {
      return {
        ...state,
        error: payload.error,
      };
    }
    case 'set/roles': {
      return {
        ...state,
        roles: [...payload.roles],
      };
    }
    case 'set/role': {
      return {
        ...state,
        roles: [...state.roles, payload.role],
      };
    }
    case 'set/delete': {
      return {
        ...state,
        showDelete: payload.showDelete,
      };
    }
    default:
      return state;
  }
};

interface ContextInterface {
  state: InitialContextStateInterface;
  dispatch: Dispatch<DispatcherInterface>;
}

export const userContext = createContext<ContextInterface>({
  state: initialState,
  dispatch: () => undefined,
});
