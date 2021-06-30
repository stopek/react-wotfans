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

export const sortByWeight = (list) => {
  return Object.values(list).filter((item) => item.weight > 0).sort(function (a, b) {
    return b.weight - a.weight;
  });
}

export const sortByWN8 = (list) => {
  return Object.values(list).sort(function (a, b) {
    return b?.wn8 > a?.wn8 ? 1 : -1;
  });
}

export const getTranslationByNation = (nation) => {
  return 'nation.' + nation;
}
