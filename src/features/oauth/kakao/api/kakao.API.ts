import { axiosInstance } from '@/shared/api'
import { toast } from '@/shared/ui'
import { devLog } from '@/shared/utils'

export async function postKakaoLogin(code: string) {
  try {
    await axiosInstance.post('/auth/kakao/signup', { code })
  } catch (error) {
    devLog('error', '카카오 로그인 에러', error)
    toast.error('카카오 로그인에 문제 발생')

    throw new Error('카카오 로그인에 문제 발생')
  }
}
