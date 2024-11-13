/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

type ReturnType<T> = [T, (value: Partial<Record<keyof T, any>>) => void];
type ExtractInputKeys<T> = Partial<Record<keyof T, any>>;

export const useForm = <T>(init?: T): ReturnType<T> => {
  const [input, setValue] = useState<T>(init!);

  const setInputValue = (v: ExtractInputKeys<T>) =>
    setValue((state) => ({ ...state, ...v }));

  return [input, setInputValue];
};