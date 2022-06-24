const prefixExponentMap = {
  '-18': 'a',
  '-17': 'a',
  '-16': 'a',
  '-15': 'f',
  '-14': 'f',
  '-13': 'f',
  '-12': 'p',
  '-11': 'p',
  '-10': 'p',
  '-9': 'n',
  '-8': 'n',
  '-7': 'n',
  '-6': 'u',
  '-5': 'u',
  '-4': 'u',
  '-3': 'm',
  '-2': 'm',
  '-1': 'm',
  0: '',
  1: '',
  2: '',
  3: '',
  4: 'k',
  5: 'k',
  6: 'k',
  7: 'M',
  8: 'M',
  9: 'M',
  10: 'G',
  11: 'G',
  12: 'G',
  13: 'T',
  14: 'T',
  15: 'T',
  16: 'P',
  17: 'P',
  18: 'P',
  19: 'E',
  10: 'E',
  21: 'E',
};

export function humanReadout({ value, unit = 'bytes' }) {
  return humanReadout3({ value, unit });
  const absValue = Math.abs(value);
  const sign = value < 0 ? '-' : value == 0 ? '' : '+';
  const zeroes = Math.trunc(Math.log10(absValue));
  const normalizerValue = Math.pow(10, zeroes);
  const prefix = prefixExponentMap[zeroes] || '?';
  return `${sign}${(absValue / normalizerValue).toFixed(2) + prefix + unit}`;
}
export function humanReadout2({ value, unit = 'bytes' }) {
  const absValue = Math.abs(value);
  let [root, exponent] = value
    .toExponential()
    .split('e')
    .map((n) => parseFloat(n));

  let exponentRest = exponent % 3;

  root = root * Math.pow(10, exponentRest + 3);
  const exponentDiv = Math.floor(exponent / 3) + 3;
  const prefix = prefixExponentMap[exponentDiv - 3];
  return `${root.toFixed(2)}${prefix}${unit}`; //`${sign}${(absValue / normalizerValue).toFixed(2) + prefix + unit}`;
}
export function humanReadout3({ value, unit = 'bytes' }) {
  let exponentDiv = -18;
  let root = value * Math.pow(10, 18);
  for (; root < 1; root = root / 10) {
    exponentDiv++;
  }
  for (; root % 3 == 0; root = root * 10) {
    exponentDiv--;
  }
  const prefix = prefixExponentMap[exponentDiv];
  return `${root.toFixed(0)}${prefix}${unit}`; //`${sign}${(absValue / normalizerValue).toFixed(2) + prefix + unit}`;
}
