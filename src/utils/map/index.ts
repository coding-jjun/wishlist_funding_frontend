export function getKeyByValue<K extends PropertyKey, V>(
  record: Record<K, V>,
  value: V,
): K {
  return Object.keys(record).find((key) => record[key as K] === value) as K;
}
