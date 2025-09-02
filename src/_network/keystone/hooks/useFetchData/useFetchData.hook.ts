import { useContextSelector } from 'use-context-selector';

import { KeystoneContext } from '../../contexts/KeystoneContext';

export const useFetchData = <TData, TVariables>(
  query: string,
): ((variables?: TVariables) => Promise<TData>) => {
  const instance = useContextSelector(
    KeystoneContext,
    ({ instance }) => instance,
  );

  return (variables?: TVariables) => {
    return instance
      .post('/', {
        query,
        variables,
      })
      .then((response) => response?.data?.data);
  };
};
