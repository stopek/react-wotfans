import Cookies from "js-cookie";

export function removeToken() {
  Cookies.remove("token");
}

export function saveToken(token) {
  Cookies.set("token", token);
}

export function getToken() {
  const token = Cookies.get("token") || null;
  return token;
}
