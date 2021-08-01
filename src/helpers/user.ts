import instance from "api/service";
import { getToken, removeToken } from "helpers/cookies";
import { PlayerInterface } from "interfaces/PlayerInterface";
import { WN8Interface } from "interfaces/WN8Interface";
import { WNRangeInterface } from "interfaces/WNRangeInterface";

export function isLogged() {
  const token = getToken();

  return !!token;
}

export const logOutUser = () => {
  delete instance.defaults.headers.common["X-Auth-Token"];
  removeToken();
}

export const sortByNumberMulti = (list: [], key: string) => {
  return Object.values(list).sort(function (a, b) {
    return b[key] > a[key] ? 1 : -1;
  });
}

export const sortByKeyMulti = <T>(list: T, key: string, desc: boolean = true) => {
  return Object.values(list).sort(function (a, b) {
    if (!desc) {
      return b[key] > a[key] ? -1 : 1;
    }

    return b[key] > a[key] ? 1 : -1;
  });
}

export const getUniqueByKeyMulti = <T>(list: T[], key: any) => {
  let result: any = [];
  let keys: any = [];

  list.forEach(function (item: any) {
    if (!keys.includes(item[key])) {
      result.push(item);
      keys.push(item[key]);
    }
  });

  return result;
}

export const getWNValueByColor = (list: WNRangeInterface[], color: string) => {
  return list.find((wn) => wn.background === color)?.value || 0;
}

export const sortByWeight = <T>(list: T) => {
  return Object.values(list).filter((item) => item?.weight > 0).sort(function (a, b) {
    return b.weight - a.weight;
  });
}

export const sortByWN8 = <T>(list: T, reverse = false) => {
  return Object.values(list).sort(function (a, b) {
    if (reverse) {
      return b?.wn8 > a?.wn8 ? -1 : 1;
    }

    return b?.wn8 > a?.wn8 ? 1 : -1;
  });
}

export const sortByActivityAndWN8 = (list: PlayerInterface[]): PlayerInterface[] => {
  return Object.values(list).sort(function (a, b) {
    return Number(a?.is_inactive) - Number(b?.is_inactive) || (b?.wn8 > a?.wn8 ? 1 : -1);
  })
}

export const getTranslationByNation = (nation: string) => {
  return 'nation.' + nation;
}
