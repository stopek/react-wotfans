import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVICE_URL
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
