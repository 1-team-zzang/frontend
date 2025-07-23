/**
 *
 * @param n : 배열의 길이
 * @returns  1부터 n까지 배열을 반환
 */

export const range = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, idx) => idx + 1)

export const rangeMonth = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, idx) => idx)
