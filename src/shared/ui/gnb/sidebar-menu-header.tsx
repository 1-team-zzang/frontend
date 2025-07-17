import { IconClose } from '@/shared/assets/icons'

import Text from '../text/text'

import { useGNBContext } from './gnb-conext'

/**
 *  sidebar의 상단 프로필, 이름, 닫기 부분
 *  프로필 공통컴포넌트 완성되면 수정예정
 */

interface Prop {
  username: string
}

export default function SideBarMenuHeader({ username }: Prop) {
  const { handleCloseSidebar } = useGNBContext()
  return (
    <div className="w-full h-14 px-4 flex items-center justify-between border-b border-gray-5">
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-5" />
        <Text as="span" typography={'b2-heading'}>
          {username}
        </Text>
      </div>
      <button onClick={handleCloseSidebar}>
        <IconClose className="w-10 h-10" />
      </button>
    </div>
  )
}
