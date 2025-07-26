import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
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

import Button from '../../../shared/ui/button/button.tsx'

import UserList from './user-list.tsx'

const FriendRequestSchema = z.object({
  friend: z.string().min(2, '2글자 이상 입력해주세요'),
})
type FriendRequestType = z.infer<typeof FriendRequestSchema>

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function AddFriendBottomSheet({ isOpen, setIsOpen }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const methods = useForm<FriendRequestType>({
    resolver: zodResolver(FriendRequestSchema),
    mode: 'onChange',
  })

  const handleSubmit = (data: FriendRequestType) => {
    setSearchQuery(data.friend)
  }

  useEffect(() => {
    if (!isOpen) {
      methods.reset()
      setSearchQuery('')
    }
  }, [isOpen, methods])

  return (
    <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
      <BottomSheetContainer className="h-1/2">
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>친구 추가</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton>닫기</BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <Form methods={methods} onSubmit={handleSubmit} className="m-0">
            <FormField name="friend">
              <div className="relative">
                <Input placeholder="이메일 검색" className="h-16" />
                <Button
                  intent="outlined"
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-fit px-6 bg-white"
                >
                  검색
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
