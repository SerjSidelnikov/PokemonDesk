import React from 'react';

import req from '../utils/request';

const useData = <T,>(endpoint: string, query: { [key: string]: string | number }, deps: any[] = []) => {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
