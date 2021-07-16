import fillRoute from "helpers/fillRoute";

export default function routeForLocale(route, locale, params = {}) {
  if (route === '/') {
    return `/${locale}`;
  }

  return (locale?.length > 0 ? `/${locale}` : '') + fillRoute(route, params);
}
