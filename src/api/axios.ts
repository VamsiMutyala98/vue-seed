import axios, { AxiosInstance } from 'axios';

export const baseURL = process.env.REACT_APP_API_URL;

interface CommonHeaderProperties {
  Authorization: string;
}

const client: AxiosInstance = axios.create({ baseURL });

// Define the headers object with the merged type
const headers: CommonHeaderProperties = {
  Authorization: 'Bearer',
};

// Use a type assertion to suppress TypeScript errors
client.defaults.headers = headers as any;

// Add a request interceptor
client.interceptors.request.use(
  (config) => {
    const newConfig = config;
    if (newConfig && newConfig.headers && newConfig.headers.Authorization) {
      newConfig.headers.Authorization = `Bearer ${window.localStorage.getItem('access-token') || ''}`;
    }
    return newConfig;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
client.interceptors.response.use(
  (response) => {
    if (response?.data instanceof Blob) {
      return response;
    }
    return response || {};
  },
  (error) => {
    if (error?.response) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        console.log('Unauthorized');
        return Promise.reject(error);
      }
      if (error?.response?.code === 'ERR_NETWORK') {
        console.log('Please check your connectivity. Unable to connect to server');
      }
    } else {
      console.log('Please check your connectivity. Unable to connect to server');
    }
    return Promise.reject(error);
  }
);

export default client;
