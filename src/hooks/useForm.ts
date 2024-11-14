/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

type ExtractInputKeys<T> = Partial<Record<keyof T, any>>;

export const useForm = <T>(init?: T) => {
  const [input, setValue] = useState<T>(init!);

  const setInputValue = (v: ExtractInputKeys<T>) =>
    setValue((state) => ({ ...state, ...v }));

  const setFormState = (state: T) => setValue(() => state);

  return { values: input, setValue: setInputValue, setFormState };
};
