import { useCallback, useContext, useEffect, useRef } from 'react';

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
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isError && error) {
      timer.current = setTimeout(
        () =>
          dispatch({
            type: 'set/error',
            payload: { error: '' },
          }),
        delay,
      );
    }

    return () => timer.current && clearTimeout(timer.current);
  }, [delay, dispatch, isError, error, state.error]);

  useEffect(() => {
    if (!isError && notification) {
      timer.current = setTimeout(
        () =>
          dispatch({
            type: 'set/notification',
            payload: { notification: '' },
          }),
        delay,
      );
    }
  }, [delay, dispatch, isError, notification]);

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
