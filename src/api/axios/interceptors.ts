import { api } from "./axios";

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_API_KEY}`;
    return config;
  },
  (error) => Promise.reject(error)
);
