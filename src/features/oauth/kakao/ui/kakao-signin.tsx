import { IconKakaoLogo } from '@/shared/assets'
import { Text } from '@/shared/ui'

import { redirectUri, restAPIKey } from '../model'

function KakaoSignin() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${restAPIKey}&redirect_uri=${redirectUri}&response_type=code`

  const loginHandler = () => {
    window.location.href = link
  }
  return (
    <Text
      as="button"
      typography="label"
      onClick={loginHandler}
      className="bg-[#FEE500] font-semibold flex gap-2 items-center justify-center w-full rounded-[0.25rem] py-2.5"
    >
      <IconKakaoLogo />
      카카오로그인
    </Text>
  )
}

export default KakaoSignin
