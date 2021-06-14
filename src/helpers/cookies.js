import Cookies from "js-cookie";

export function removeToken() {
  Cookies.remove("token");
  Cookies.remove("refresh-token");
}

export function saveToken(data, isRemember) {
  Cookies.set("token", data?.access_token);

  if (isRemember) {
    Cookies.set("refresh-token", data?.refresh_token);
  }
}

export function getToken() {
  const token = Cookies.get("token") || null;
  return token;
}

export function getRefreshToken() {
  const refresh = Cookies.get("refresh-token") || null;
  return refresh;
}
