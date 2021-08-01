export function priceFormat(num: string | number = '', replaceValue = ',', unit: any, digits = 2) {
  return format_number(num, digits, replaceValue, ' ') + (unit ? ' ' + unit : '');
}

export const valueFormat = (value: string | number, decimals = 3) => {
  return parseFloat(format_number(value, decimals, '.', ''));
}

export const xpResult = (value: string | number) => {
  return format_number(value, 5, ',', '');
}

export const numberResult = (value: string | number, decimals = 5) => {
  return format_number(value, decimals, ',', ' ');
}

export const percentageDisplay = (value: string | number, decimals = 3) => {
  return format_number(value, decimals, ',', '') + '%';
}

export const perBattleDisplay = (value: string | number) => {
  return format_number(value, 3, ',', ' ');
}

export const percentageCalculator = (amount: number, total: number) => {
  return format_number((100 * amount) / total, 5, '.', '');
}

export const perBattleCalculator = (amount: number, battles: number) => {
  return format_number(amount / battles, 5, '.', '');
}


const format_number = (number: number | string, decimals: number, dec_point: string = '', thousands_sep: string = '') => {
  let n = !isFinite(+number) ? 0 : +number,
    precision = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    toFixedFix = function (n: number, precision: number) {
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      let k = Math.pow(10, precision);
      return Math.round(n * k) / k;
    },
    s = (precision ? toFixedFix(n, precision) : Math.round(n)).toString().split('.');

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || '').length < precision) {
    s[1] = s[1] || '';
    s[1] += new Array(precision - s[1].length + 1).join('0');
  }

  return s.join(dec);
}
