import { useState } from 'react'

import { IconKebabMenu } from '@/shared/assets/icons'

import { Dropdown, DropDownMenu, DropDownMenuItem, DropDownTrigger } from '../../../../shared/ui/dropdown'

interface Props {
  onDeleteClick: () => void
}

export default function EditSchduleDropDown({ onDeleteClick }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const onMenuClick = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <DropDownTrigger onClick={onMenuClick}>
      <IconKebabMenu
        onClick={(e) => {
          e.stopPropagation()
          onMenuClick()
        }}
      />
      {isOpen && (
        <Dropdown handleClose={onMenuClick}>
          <DropDownMenu position="right">
            <DropDownMenuItem>수정</DropDownMenuItem>
            <DropDownMenuItem onClick={onDeleteClick}>삭제</DropDownMenuItem>
          </DropDownMenu>
        </Dropdown>
      )}
    </DropDownTrigger>
  )
}
