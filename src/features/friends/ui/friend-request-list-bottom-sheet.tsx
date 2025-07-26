import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetHeaderButton,
  BottomSheetHeaderTitle,
} from '@/shared/ui/bottom-sheet'

import FriendRequestItem from './friend-request-item'

import type { FriendRequest } from '@/entities/friends/models/friend.types'
import type { Dispatch, SetStateAction } from 'react'

interface Props {
  friendRequestList: FriendRequest[]
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function FriendRequestListBottomSheet({ friendRequestList, isOpen, setOpen }: Props) {
  return (
    <BottomSheet open={isOpen} onOpenChange={setOpen}>
      <BottomSheetContainer className="h-1/2">
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>초대 수락</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton>닫기</BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <div className="flex flex-col gap-3 h-80 overflow-y-auto">
            {friendRequestList.map((friendRequest) => (
              <FriendRequestItem friendRequest={friendRequest} key={friendRequest.friendRequestId} />
            ))}
          </div>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
