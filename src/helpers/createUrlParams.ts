type CreateUrlParamsType = {
  [key: string]: string
}

export default function createUrlParams(url: string, params: CreateUrlParamsType[]) {
  return url + '?' + Object.entries(params).map(([key, value]) => {
    if (!value || !value?.length) {
      return null;
    }

    return key + '=' + value;
  }).filter((item) => item !== null).join('&');
};
