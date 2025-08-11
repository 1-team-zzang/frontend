import { isDevelop } from '@/shared/utils'

export const redirectUri = isDevelop()
  ? import.meta.env.VITE_DEVELOP_KAKAO_REDIRECT_URI
  : import.meta.env.VITE_DEPLOY_KAKAO_REDIRECT_URI

export const restAPIKey = import.meta.env.VITE_KAKAO_REST_API_KEY

export const clientSecret = import.meta.env.VITE_CLIENT_SECRET

export const kakao = {
  restAPIKey,
  clientSecret,
  redirectUri,
}
