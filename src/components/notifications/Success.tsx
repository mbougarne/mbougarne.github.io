import { FC } from 'react';
import { Base } from './Base';
import { useSuccessNotification } from '@/hooks';

export const SuccessNotification: FC = () => {
  const { success } = useSuccessNotification();

  return <Base message={success} />;
};
