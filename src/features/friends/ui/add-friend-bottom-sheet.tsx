import { useEffect, useState } from 'react'

import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetHeaderButton,
  BottomSheetHeaderTitle,
} from '@/shared/ui'

import FriendSearchForm from './friend-search-form'
import FriendSearchResult from './friend-search-result'

import type { FriendSearchType } from '../model'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function AddFriendBottomSheet({ isOpen, setIsOpen }: Props) {
  const [searchType, setSearchType] = useState<FriendSearchType>('EMAIL')
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('')
    }
  }, [isOpen])

  return (
    <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
      <BottomSheetContainer className="h-1/2">
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>친구 추가</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton>닫기</BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <FriendSearchForm
            key={searchType}
            searchType={searchType}
            onTypeChange={setSearchType}
            onSubmit={setSearchQuery}
          />
          <FriendSearchResult searchType={searchType} searchQuery={searchQuery} />
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
