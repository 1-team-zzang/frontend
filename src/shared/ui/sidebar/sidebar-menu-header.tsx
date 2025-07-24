import { useUserStore } from '@/entities/user/models/use-user-store'
import { IconClose } from '@/shared/assets/icons'

import { useGNBContext } from '../gnb/gnb-conext'
import { Profile, ProfileImage, ProfileName } from '../profile'

/**

 *  sidebar의 상단 프로필, 이름, 닫기 부분

 *  프로필 공통컴포넌트 완성되면 수정예정

 */

export default function SidebarMenuHeader() {
  const { user } = useUserStore()
  const { handleCloseSidebar } = useGNBContext()

  if (!user) {
    return null
  }

  const { name, profileUrl } = user

  return (
    <div className="w-full h-14 px-4 flex items-center justify-between border-b border-gray-5">
      <div className="flex items-center justify-center gap-3">
        <Profile name={name} src={profileUrl}>
          <ProfileImage />
          <ProfileName />
        </Profile>
      </div>

      <button onClick={handleCloseSidebar}>
        <IconClose className="w-10 h-10" />
      </button>
    </div>
  )
}
