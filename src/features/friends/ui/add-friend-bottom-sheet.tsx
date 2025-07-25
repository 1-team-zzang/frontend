import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetHeaderButton,
  BottomSheetHeaderTitle,
} from '@/shared/ui/bottom-sheet'
import { Form, FormField } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { devLog } from '@/shared/utils/dev-log'

import Button from '../../../shared/ui/button/button.tsx'

import UserList from './user-list.tsx'

const FriendRequestSchema = z.object({
  friend: z.string().min(2, '2글자 이상 입력해주세요'),
})
type FriendRequestType = z.infer<typeof FriendRequestSchema>

export default function AddFriendBottomSheet() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const methods = useForm<FriendRequestType>({
    resolver: zodResolver(FriendRequestSchema),
    mode: 'onChange',
  })

  const handleSubmit = (data: FriendRequestType) => {
    setSearchQuery(data.friend)
  }

  return (
    <BottomSheet>
      <BottomSheetContainer className="h-1/2">
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>친구 추가</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton onClick={() => devLog('log', '커스텀 버튼 클릭')}>닫기</BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <Form methods={methods} onSubmit={handleSubmit} className="m-0">
            <FormField name="friend">
              <div className="relative">
                <Input placeholder="이메일 검색" className="h-16" />
                <Button intent="outlined" className="absolute right-4 top-1/2 -translate-y-1/2 w-fit px-6">
                  초대
                </Button>
              </div>
            </FormField>
          </Form>

          <UserList searchQuery={searchQuery} />
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
