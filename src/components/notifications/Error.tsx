import { FC } from 'react';
import { Base } from './Base';
import { useErrorNotification } from '@/hooks';

export const ErrorNotification: FC = () => {
  const { error } = useErrorNotification();

  return (
    <Base
      message={error}
      isError={true}
    />
  );
};
