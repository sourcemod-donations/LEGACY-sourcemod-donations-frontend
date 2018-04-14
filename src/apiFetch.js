import config from "./config";

const apiFetch = (url, args = {}) => {
  url = config.API_URL + url;

  args.headers = {
    ...args.headers,
    'Content-Type': 'application/json'
  };

  return fetch(url, args);
};

export default apiFetch;