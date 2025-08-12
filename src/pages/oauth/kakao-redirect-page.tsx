import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import { useKakaoSigninMutation } from '@/features/oauth/kakao/model'
import { Text, Dots } from '@/shared/ui'

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
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen">
      <Dots />
      <Text as="p" typography="b2-heading" className="text-center">
        카카오 로그인중입니다 <br />
        잠시만 기다려주세요
      </Text>
    </main>
  )
}
