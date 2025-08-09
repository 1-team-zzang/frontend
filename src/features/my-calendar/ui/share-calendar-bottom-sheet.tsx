import { useUserStore } from '@/entities/user'
import { IconClose } from '@/shared/assets/icons'
import { BottomSheet, BottomSheetContainer, BottomSheetContent } from '@/shared/ui/bottom-sheet'
import Text from '@/shared/ui/text/text'

import handleShareLinkCopy from '../utils/handle-share-link-copy'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function ShareCalendarBottomSheet({ isOpen, setIsOpen }: Props) {
  const userId = useUserStore((state) => state.user?.userId)
  const link = `https://calpick.vercel.app/share/${userId}`

  const handleCopy = handleShareLinkCopy({ link, setIsOpen })
  return (
    <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
      <BottomSheetContainer className="bg-white z-fixed">
        <BottomSheetContent className="flex flex-col gap-6 mb-[3.25rem]">
          <div className="flex items-center justify-between">
            <div className="size-6" />
            <Text as="span" typography="h2-heading">
              캘린더 공유
            </Text>
            <IconClose className="size-6 cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <Text as="span" typography="b2-normal" className="mt-4">
            캘린더 링크가 생성되었습니다. 과거 일정은 나만보기로 자동 전환되어 공개되지 않습니다.
          </Text>
          <div className="w-full flex justify-between items-center h-16 bg-gray-1 px-4">
            <Text as="span" typography="b2-normal" className="text-gray-60 truncate">
              {link}
            </Text>
            <button className="w-20 h-11 bg-primary-60 rounded" onClick={handleCopy}>
              복사
            </button>
          </div>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
