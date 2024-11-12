import { createContext, Dispatch } from 'react';
import { IUserRole } from '@/types';

export interface InitialContextStateInterface {
  roles: IUserRole[];
  notification: string;
  error: string;
}

interface DispatcherInterface {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: Record<string, any>;
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
