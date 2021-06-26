import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVICE_URL
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      return Promise.reject(error);
    }
  }
);

export default instance;
