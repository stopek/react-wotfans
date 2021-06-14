function fillRoute(route_name, params = {}) {
  Object.keys(params).forEach(function (key) {
    let clear_param = null === params[key];

    let regex = new RegExp(`(\/?)(:${key})\\??`, 'gi');
    route_name = route_name.replace(regex, clear_param ? '' : "$1" + params[key].toString());
  });

  return route_name;
}

export default fillRoute