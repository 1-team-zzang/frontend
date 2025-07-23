export function validateRequiredFields<T>(data: T, requiredFields: readonly (keyof T)[]): boolean {
  for (const field of requiredFields) {
    if (!data[field]) {
      return false
    }
  }
  return true
}
