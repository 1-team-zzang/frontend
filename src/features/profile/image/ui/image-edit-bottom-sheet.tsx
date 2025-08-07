import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetHeaderButton,
  BottomSheetHeaderTitle,
} from '@/shared/ui'

import SelectProfile from './select-profile'

interface Props {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onImageChange: (src: string) => void
}

export default function ImageEditBottomSheet({ isOpen, onOpenChange, onImageChange }: Props) {
  return (
    <BottomSheet open={isOpen} onOpenChange={onOpenChange}>
      <BottomSheetContainer className="h-1/2 sm:h-[calc(50vh+50px)]">
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>프로필 선택</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton type="button">완료</BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent className="">
          <div className="grid grid-cols-3 gap-6 pb-20">
            <SelectProfile onChange={onImageChange} src="/images/profile_01.png" alt="profile-1" />
            <SelectProfile onChange={onImageChange} src="/images/profile_02.png" alt="profile-2" />
            <SelectProfile onChange={onImageChange} src="/images/profile_03.png" alt="profile-3" />
            <SelectProfile onChange={onImageChange} src="/images/profile_04.png" alt="profile-4" />
            <SelectProfile onChange={onImageChange} src="/images/profile_05.png" alt="profile-5" />
            <SelectProfile onChange={onImageChange} src="/images/profile_06.png" alt="profile-6" />
          </div>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
