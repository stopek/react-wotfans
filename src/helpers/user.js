import instance from "api/service";
import { getToken, removeToken } from "helpers/cookies";

export function isLogged() {
  const token = getToken();

  return token?.length > 0;
}

export const logOutUser = () => {
  delete instance.defaults.headers.common["X-Auth-Token"];
  removeToken();
}