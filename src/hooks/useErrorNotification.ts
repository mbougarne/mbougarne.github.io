import { useNotificationBuilder } from './useNotificationBuilder';

export const useErrorNotification = (delay: number = 3000) => {
  const [error, setError] = useNotificationBuilder(true, delay);

  return { error, setError };
};
