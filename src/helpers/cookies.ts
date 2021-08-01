import cookie from 'react-cookies'

export function removeToken() {
  cookie.remove("token");
}

export function saveToken(token: string) {
  cookie.save("token", token, {
    path: '/'
  });
}

export function getToken(): string | null {
  return cookie.load("token") || null;
}
