import { FC } from 'react';
import { AppContainer } from '@/components';

import { AppTheme } from './theme';

export const App: FC = () => {
  return (
    <>
      <AppTheme>
        <AppContainer />
      </AppTheme>
    </>
  );
};
