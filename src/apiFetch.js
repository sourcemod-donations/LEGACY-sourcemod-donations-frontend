import config from "./config";

const apiFetch = (url) => {
  url = config.API_URL + url;

  return fetch(url);
};

export default apiFetch;