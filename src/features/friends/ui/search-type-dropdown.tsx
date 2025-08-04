import { useState } from 'react'

import { IconCalendarArrowRight } from '@/shared/assets'
import { Dropdown, DropDownMenu, DropDownMenuItem, DropDownTrigger, Text } from '@/shared/ui'

import type { FriendSearchType } from '../model'

interface Props {
  searchType: FriendSearchType
  onTypeChange: (type: FriendSearchType) => void
}

export default function SearchTypeDropdown({ searchType, onTypeChange }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Dropdown handleClose={() => setIsOpen(false)} className="h-full">
      <DropDownTrigger
        className="bg-gray-1 text-gray-60 h-14 rounded px-3 py-2 whitespace-nowrap flex gap-1 items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Text as="span" typography="label">
          {searchType === 'EMAIL' ? '이메일' : '이름'}
        </Text>

        <IconCalendarArrowRight className="rotate-90 size-5" />
      </DropDownTrigger>
      {isOpen && (
        <DropDownMenu position="center">
          <DropDownMenuItem onClick={() => onTypeChange('EMAIL')} onClose={() => setIsOpen(false)}>
            이메일
          </DropDownMenuItem>
          <DropDownMenuItem onClick={() => onTypeChange('NAME')} onClose={() => setIsOpen(false)}>
            이름
          </DropDownMenuItem>
        </DropDownMenu>
      )}
    </Dropdown>
  )
}
