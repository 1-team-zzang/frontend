export const AuthErrorMessages = {
  'AUTH-01': '중복된 이메일입니다',
  'AUTH-02': '잘못된 이메일 형식입니다',
  'AUTH-03': '비밀번호가 일치하지 않습니다.',
  'AUTH-04': '이메일 형식이 아닙니다.',
  'AUTH-05': '로그인이 만료되었습니다. 다시 로그인해주세요.',
  'AUTH-06': '인증이 필요합니다. 로그인 후 다시 시도해주세요.',
}

export type AuthErrorCode = keyof typeof AuthErrorMessages
