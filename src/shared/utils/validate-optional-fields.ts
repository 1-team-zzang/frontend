export function validateOptionalFields<T extends Record<string, unknown>>(
  data: T,
  optionalFields: (keyof T)[],
): boolean {
  for (const field of optionalFields) {
    if (data[field] === undefined) {
      return false
    }
  }
  return true
}
