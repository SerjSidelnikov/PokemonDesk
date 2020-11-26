import Url from 'url';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async <T>(endpoint: string, query: { [key: string]: string | number }): Promise<T> => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  return await fetch(uri).then((res) => res.json());
};

export default req;
