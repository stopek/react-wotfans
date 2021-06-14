function tagReplace(string, params = {}) {

  Object.keys(params).forEach(function (key) {
    string = string.replace('{' + key + '}', params[key]);
  });

  return string;
}

export default tagReplace