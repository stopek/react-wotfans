import instance from "api/service";
import Axios from "axios";
import { getToken } from "helpers/cookies";

export function requestToApi(
  callback,
  paramsAssoc,
  successCallback,
  errorCallback
) {
  const token = getToken();
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    instance.defaults.headers.common["Accept"] = `application/json`;
  }

  const CancelToken = Axios.CancelToken;
  const source = CancelToken.source();

  callback(paramsAssoc, source)
    .then(successCallback)
    .catch((error) => {
      if (Axios.isCancel(error)) {
        return;
      }

      if (error.response || error.request) {
        const request = error.request;
        const parsed = request?.response ? JSON.parse(request.response) : request;

        errorCallback && errorCallback(parsed, error);
      } else {
        console.log('Error::: ', error);
      }
    });

  return () => {
    source.cancel("Component will unmount");
  };
}

export function preloadCreatorWithReject(action) {
  return async (userData, { rejectWithValue }) => {
    try {
      return await action(userData);
    } catch (err) {
      return rejectWithValue(err?.response?.data?.errors || err?.response?.data?.custom || null)
    }
  }
}