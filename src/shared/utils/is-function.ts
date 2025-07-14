// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
export function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function'
}
