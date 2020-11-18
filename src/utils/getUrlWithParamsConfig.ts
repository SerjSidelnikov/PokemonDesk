import config from '../config';

const getUrlWithParamsConfig = (endpointConfig: string, query: { [key: string]: string | number }) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };
};

export default getUrlWithParamsConfig;
