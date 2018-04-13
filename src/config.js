const config = {
  API_URL: '/'
};

const devConfig = {
  API_URL: 'http://localhost:8080/'
};

const currentConfig = {
    ...config,
    ...(process.env.NODE_ENV !== "production" ? devConfig : {})
};

export default currentConfig;