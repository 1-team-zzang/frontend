export type LoginType = 'KAKAO' | 'NORMAL'

export interface User {
  userId: number
  email: string
  name: string
  profileUrl: string | null
  loginTypes: LoginType[]
}
