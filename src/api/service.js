import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVICE_URL
});

// instance.defaults.withCredentials = true;
// instance.defaults.headers.common["Authorization"] = `Bearer -`;
// instance.defaults.headers.common["Accept"] = `application/json`;

// instance.defaults.headers.common["Content-Type"] = `application/x-www-form-urlencoded`;

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