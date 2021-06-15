import Axios from "axios";

export function requestToApi(
  callback,
  paramsAssoc,
  successCallback,
  errorCallback
) {
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
      }
    });

  return () => {
    source.cancel("Component will unmount");
  };
}