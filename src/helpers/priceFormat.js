export function priceFormat(num = '', replaceValue = ',', unit = false, digits = 2) {
  return parseFloat(num).toFixed(digits).replace('.', replaceValue) + (unit ? ' ' + unit : '');
}
