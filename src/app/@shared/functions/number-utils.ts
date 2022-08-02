export function isNumberRange(
  value: string,
  min: number = 1,
  max: number = 32767
): boolean {
  if (!Number.isInteger(+value)) {
    return false;
  }

  const valueParsed = parseInt(value, 10);

  if (!valueParsed) {
    return false;
  }

  return valueParsed >= min && valueParsed <= max;
}
