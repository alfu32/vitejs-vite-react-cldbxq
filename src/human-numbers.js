const prefixExponentMap = {
  '-6': 'a',
  '-5': 'f',
  '-4': 'p',
  '-3': 'n',
  '-2': 'u',
  '-1': 'm',
  0: '',
  1: 'k',
  2: 'M',
  3: 'G',
  4: 'T',
  5: 'P',
  6: 'E',
};

export function humanReadout({ value, unit = 'bytes' }) {
  const absValue = Math.abs(value);
  const sign = value < 0 ? '-' : value == 0 ? '' : '+';
  const zeroGroups = Math.trunc(Math.log10(absValue) / 3);
  const normalizerValue = Math.pow(10, 3 * zeroGroups);
  const prefix = prefixExponentMap[zeroGroups] || '?';
  return `${sign}${(absValue / normalizerValue).toFixed(2) + prefix + unit}`;
}
