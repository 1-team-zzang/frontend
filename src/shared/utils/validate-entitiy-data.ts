import { validateOptionalFields } from './validate-optional-fields'
import { validateRequiredFields } from './validate-required-fields'

export function validateEntityData<T extends Record<string, unknown>>(
  data: T,
  requiredFields: (keyof T)[],
  optionalFields: (keyof T)[],
): boolean {
  return validateRequiredFields(data, requiredFields) && validateOptionalFields(data, optionalFields)
}
