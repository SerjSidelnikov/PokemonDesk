import config from '../config';

const getUrlWithParamsConfig = (endpointConfig: string, query: any) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };

  url.pathname = Object.keys(query).reduce((acc, value) => {
    if (acc.indexOf(`{${value}}`) !== -1) {
      const result = acc.replace(`{${value}}`, query[value]);
      delete query[value]; // eslint-disable-line
      return result;
    }

    return acc;
  }, url.pathname);

  return url;
};

export default getUrlWithParamsConfig;
