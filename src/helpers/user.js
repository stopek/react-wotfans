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

export const sortByNumberMulti = (list, key) => {
  return Object.values(list).sort(function (a, b) {
    return b[key] > a[key] ? 1 : -1;
  });
}

export const sortByKeyMulti = (list, key, desc = true) => {
  return Object.values(list).sort(function (a, b) {
    if (!desc) {
      return b[key] > a[key] ? -1 : 1;
    }

    return b[key] > a[key] ? 1 : -1;
  });
}

export const getUniqueByKeyMulti = (list, key) => {
  let result = [];
  let keys = [];

  list.forEach(function (item) {
    if (!keys.includes(item[key])) {
      result.push(item);
      keys.push(item[key]);
    }
  });

  return result;
}

export const getWNValueByColor = (list, color) => {
  return list.find((wn) => wn.background === color)?.value || 0;
}

export const sortByWeight = (list) => {
  return Object.values(list).filter((item) => item.weight > 0).sort(function (a, b) {
    return b.weight - a.weight;
  });
}

export const sortByWN8 = (list, reverse = false) => {
  return Object.values(list).sort(function (a, b) {
    if (reverse) {
      return b?.wn8 > a?.wn8 ? -1 : 1;
    }

    return b?.wn8 > a?.wn8 ? 1 : -1;
  });
}

export const sortByActivityAndWN8 = (list) => {
  return Object.values(list).sort(function (a, b) {
    return Number(a?.is_inactive) - Number(b?.is_inactive) || (b?.wn8 > a?.wn8 ? 1 : -1);
  })
}

export const getTranslationByNation = (nation) => {
  return 'nation.' + nation;
}
