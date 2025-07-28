import { AuthErrorMessages, type AuthErrorCode } from './auth-error-messages'

export function getAuthErrorMessage(code: AuthErrorCode): string {
  return AuthErrorMessages[code] ?? '알 수 없는 오류가 발생했어요'
}
