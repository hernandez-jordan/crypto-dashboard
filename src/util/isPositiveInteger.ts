export function isPositiveInteger(num: number) {
  if (Math.sign(num) === -1) {
    return false;
  }
  return true;
}
