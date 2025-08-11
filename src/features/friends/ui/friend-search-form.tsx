import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Form, FormField, Input } from '@/shared/ui'

import { SEARCH_CONFIG, makeFriendRequestSchema, type FriendRequestType, type FriendSearchType } from '../model'

import SearchTypeDropdown from './search-type-dropdown'

interface Props {
  searchType: FriendSearchType
  onTypeChange: (t: FriendSearchType) => void
  onSubmit: (q: string) => void
}

export default function FriendSearchForm({ searchType, onTypeChange, onSubmit }: Props) {
  const methods = useForm<FriendRequestType>({
    resolver: zodResolver(makeFriendRequestSchema(searchType)),
    mode: 'onChange',
    defaultValues: { friend: '' },
  })

  const handleSubmit = (data: FriendRequestType) => {
    onSubmit(data.friend)
  }

  const placeholder = SEARCH_CONFIG[searchType].placeholder

  return (
    <Form methods={methods} onSubmit={handleSubmit} className="m-0">
      <FormField name="friend">
        <div className="relative flex items-center gap-2">
          <SearchTypeDropdown searchType={searchType} onTypeChange={onTypeChange} />
          <Input placeholder={placeholder} className="h-14" />
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
  )
}
