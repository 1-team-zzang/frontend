/**
 *
 * @param n : 배열의 길이
 * @returns  range : 1부터 n까지 배열을 반환, rangeMonth: 0부터 n까지 반환
 */

export const range = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, idx) => idx + 1)

export const rangeMonth = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, idx) => idx)