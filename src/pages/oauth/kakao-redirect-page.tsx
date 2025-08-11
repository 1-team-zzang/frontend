import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import useKakaoSigninMutation from '@/features/oauth/kakao/model/use-kakao-signin-mutation'
// 배럴 패턴으로 import 하면 에러 떠서 실제 경로로 import했어요

export default function KaKaoRedirectPage() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  const kakaoSigninMutation = useKakaoSigninMutation()

  const navigate = useNavigate()

  useEffect(() => {
    if (code) {
      kakaoSigninMutation.mutate(code, {
        onSuccess: () => {
          navigate('/')
        },
      })
    }
  }, [code])

  // TODO  카카오 로그인 되면 수정 예정
  return <div>카카오 로그인 처리 중입니다...</div>
}
