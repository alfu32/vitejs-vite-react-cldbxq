const prefixes = 'fapnum kMGTPE'.split('');
export function human({ value, unit = 'bytes' }) {
  return `${value.toFixed(1)}${unit}`;
  let exponentDiv = 0;
  let root = value * Math.pow(10, 18);
  for (; root > 1; root = root / 1000) {
    exponentDiv += 3;
  }
  const prefix = prefixes[exponentDiv];
  return `${value.toFixed(1)}${root.toFixed(0)}${prefix}${unit}`; //`${sign}${(absValue / normalizerValue).toFixed(2) + prefix + unit}`;
}
