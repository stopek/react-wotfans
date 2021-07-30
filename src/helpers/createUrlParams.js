export default function createUrlParams(url, params = {}) {
  return url + '?' + Object.keys(params).map(function (key) {
    if (!params[key]) {
      return null;
    }

    return key + '=' + params[key];
  }).filter((item) => item !== null).join('&');
};