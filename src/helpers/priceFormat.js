export function priceFormat(num = '', replaceValue = ',', unit = false, digits = 2) {
  return format_number(num, digits, replaceValue, ' ') + (unit ? ' ' + unit : '');
}


export const xpResult = (value) => {
  return format_number(value, 5, ',', '');
}

export const numberResult = (value) => {
  return format_number(value, 5, ',', ' ');
}

export const percentageDisplay = (value, decimals = 3) => {
  return format_number(value, decimals, ',', '') + '%';
}

export const perBattleDisplay = (value) => {
  return format_number(value, 5, ',', ' ');
}

export const percentageCalculator = (amount, total) => {
  return format_number((100 * amount) / total, 5, '.', '');
}

export const perBattleCalculator = (amount, battles) => {
  return format_number(amount / battles, 5, '.', '');
}


const format_number = (number, decimals, dec_point, thousands_sep) => {
  let n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    toFixedFix = function (n, prec) {
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      let k = Math.pow(10, prec);
      return Math.round(n * k) / k;
    },
    s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
