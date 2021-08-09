function tagReplace(string = '', params = {}) {
  if (!Object.keys(params)?.length) {
    return string;
  }

  if (!string?.length) {
    return string;
  }

  Object.keys(params).forEach(function (key) {
    string = string.replace('{' + key + '}', params[key] || '');
  });

  return string;
}

export default tagReplace