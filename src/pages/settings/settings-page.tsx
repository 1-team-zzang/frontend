import { useUserStore } from '@/entities/user'
import SettingListItem from '@/features/auth/setting/setting-list-item'
import { Header } from '@/shared/ui'

export default function SettingsPage() {
  const { user } = useUserStore()
  const { loginTypes } = user!
  const isKakaoLogin = loginTypes[0] === 'KAKAO'

  return (
    <>
      <Header onNavigate={<div />} onClick={<div />}>
        설정
      </Header>
      <div>
        <SettingListItem href="/settings/profile-edit">프로필 수정</SettingListItem>
        <SettingListItem
          isKaKaoLogin={isKakaoLogin}
          message="카카오 로그인은 비밀번호 변경이 불가합니다"
          href="/settings/password-change"
        >
          비밀번호 변경
        </SettingListItem>
        <SettingListItem href="/settings/withdraw">회원탈퇴</SettingListItem>
      </div>
    </>
  )
}
