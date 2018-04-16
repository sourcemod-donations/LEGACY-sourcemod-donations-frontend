import config from "./config";

const apiFetch = (url, options = {}) => {
  url = config.API_URL + url;

  options.method = options.method || 'GET';
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json'
  };

  if (!['GET', 'HEAD'].includes(options.method)) {
    options.body = options.body || {};

    if (typeof options.body !== 'string')
      options.body = JSON.stringify(options.body);
  }

  return fetch(url, options);
};

export default apiFetch;