import { useCallback, useContext, useEffect } from 'react';

import { userContext } from '@/store';

type SetterFunction = (arg: string) => void;
type AlertBuilderReturnType = [string, SetterFunction];
type AlertBuilderType = (
  isError: boolean,
  delay?: number,
) => AlertBuilderReturnType;

export const useNotificationBuilder: AlertBuilderType = (
  isError: boolean,
  delay: number = 3000,
): AlertBuilderReturnType => {
  const { dispatch, state } = useContext(userContext);
  const { error, notification } = state;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isError) {
      if (error) {
        timer = setTimeout(
          () =>
            dispatch({
              type: 'set/error',
              payload: { error: '' },
            }),
          delay,
        );
      }
    } else {
      if (notification) {
        timer = setTimeout(
          () =>
            dispatch({
              type: 'set/notification',
              payload: { notification: '' },
            }),
          delay,
        );
      }
    }

    return () => clearTimeout(timer);
  }, [delay, dispatch, isError, notification, error]);

  const setNotification: SetterFunction = useCallback(
    (msg: string) => {
      if (isError) {
        dispatch({
          type: 'set/error',
          payload: { error: msg },
        });
      } else {
        dispatch({
          type: 'set/notification',
          payload: { notification: msg },
        });
      }
    },
    [dispatch, isError],
  );

  return [isError ? error : notification, setNotification];
};
