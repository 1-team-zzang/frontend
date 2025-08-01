import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { IconCheck } from '@/shared/assets/icons'
import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetHeaderButton,
  BottomSheetHeaderTitle,
} from '@/shared/ui/bottom-sheet'
import Button from '@/shared/ui/button/button.tsx'
import { Form, FormField } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import Text from '@/shared/ui/text/text'

import SearchTypeDropdown from './search-type-dropdown'
import UserListSkeleton from './user-list-skeleton'

import { UserList } from './index'

import type { FriendSearchType } from '../model'

const FriendRequestSchema = z.object({
  friend: z.string().min(2, '2글자 이상 입력해주세요'),
})
type FriendRequestType = z.infer<typeof FriendRequestSchema>

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function AddFriendBottomSheet({ isOpen, setIsOpen }: Props) {
  const [searchType, setSearchType] = useState<FriendSearchType>('EMAIL')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { reset } = useQueryErrorResetBoundary()

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
              <div className="relative flex items-center gap-2">
                <SearchTypeDropdown searchType={searchType} onTypeChange={setSearchType} />
                <Input placeholder={searchType === 'EMAIL' ? '이메일 검색' : '이름 검색'} className="h-14" />
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
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div className="p-2 h-64 mt-2 flex items-center justify-center">
                <div>
                  <Text as="span" typography="label">
                    다시시도{' '}
                  </Text>
                  {/* TODO 빙글 도는 아이콘으로 추가하면 좋을듯 */}
                  <button onClick={resetErrorBoundary} className="rounded-full border border-gray-20 p-2">
                    <IconCheck />
                  </button>
                </div>
              </div>
            )}
          >
            <Suspense fallback={<UserListSkeleton />}>
              <UserList searchQuery={searchQuery} searchType={searchType} />
            </Suspense>
          </ErrorBoundary>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
