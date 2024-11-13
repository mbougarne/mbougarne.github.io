import { userContext } from '@/store';
import { FC, useContext } from 'react';
import { Base } from './Base';

export const ErrorNotification: FC = () => {
  const { state } = useContext(userContext);

  return (
    <Base
      message={state.notification}
      isError={true}
    />
  );
};
