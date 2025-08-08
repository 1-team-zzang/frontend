import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

import { postKakaoLogin } from '@/features/oauth/kakao/api/kakao.API'
// 배럴 패턴으로 import 하면 에러 떠서 실제 경로로 import했어요

export default function KaKaoRedirectPage() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (code) {
      try {
        postKakaoLogin(code)
      } catch (error) {
        console.error(error)
      }
    }
  }, [code])

  // TODO  카카오 로그인 되면 수정 예정
  return <div>카카오 로그인 처리 중입니다...</div>
}
