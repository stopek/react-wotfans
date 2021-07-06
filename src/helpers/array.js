export const multidimensionalValuesKeyValue = (list, key, value_key) => {
  let output = {};

  list.forEach((item) => {
    output[item[key]] = item[value_key];
  });

  return output;
}
