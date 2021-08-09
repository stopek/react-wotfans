export const multidimensionalValuesKeyValue = (list: [], key: string, value_key: string) => {
  let output = {};

  list.forEach((item) => {
    output[item[key]] = item[value_key];
  });

  return output;
}
