import { userContext } from '@/store';
import { FC, useContext } from 'react';
import { Base } from './Base';

export const SuccessNotification: FC = () => {
  const { state } = useContext(userContext);

  return <Base message={state.notification} />;
};
