import axios, { AxiosRequestConfig } from 'axios';
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  responseType: 'json',
  // @ts-ignore
  https: config,
});
const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> => instance.get(url, config);
export { get };
