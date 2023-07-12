import { tokenManager } from './../TokenManager';

import { Axios } from './axios';

const http = new Axios({
  baseURL: process.env.REACT_APP_API_URL
});

http.useInterceptor(async config => {
  const token = await tokenManager.getToken();

  if (token && !config.removeAuth) config.headers.Authorization = token;

  return config;
});

export { http };
