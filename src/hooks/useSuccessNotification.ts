import { useNotificationBuilder } from './useNotificationBuilder';

export const useSuccessNotification = (delay: number = 3000) => {
  const [success, setSuccess] = useNotificationBuilder(false, delay);

  return { success, setSuccess };
};
