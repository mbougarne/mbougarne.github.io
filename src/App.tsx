import { FC, useReducer } from 'react';
import { AppContainer } from '@/components';

import {
  mainReducer,
  initialState,
  type InitialContextStateInterface,
  userContext,
} from './store';
import { AppTheme } from './theme';

const reducerInitializer = (state: InitialContextStateInterface) => {
  return state;
};

const { Provider } = userContext;

export const App: FC = () => {
  const [state, dispatch] = useReducer(
    mainReducer,
    initialState,
    reducerInitializer,
  );

  return (
    <>
      <Provider value={{ state, dispatch }}>
        <AppTheme>
          <AppContainer />
        </AppTheme>
      </Provider>
    </>
  );
};
