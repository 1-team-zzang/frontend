import { useState } from 'react'

import { IconKebabMenu } from '@/shared/assets/icons'
import { Dropdown, DropDownMenu, DropDownMenuItem, DropDownTrigger } from '@/shared/ui/dropdown'

interface Props {
  onDeleteClick: () => void
  onEditClick: () => void
}

export default function EditSchduleDropDown({ onDeleteClick, onEditClick }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const onMenuClick = (callback?: () => void) => {
    setIsOpen(false)
    callback?.()
  }

  return (
    <Dropdown handleClose={() => setIsOpen(false)}>
      <DropDownTrigger
        className="cursor-pointer"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <IconKebabMenu />
      </DropDownTrigger>
      {isOpen && (
        <DropDownMenu position="right">
          <DropDownMenuItem onClick={() => onMenuClick(onEditClick)}>수정</DropDownMenuItem>
          <DropDownMenuItem
            onClick={() => {
              onMenuClick(onDeleteClick)
            }}
          >
            삭제
          </DropDownMenuItem>
        </DropDownMenu>
      )}
    </Dropdown>
  )
}
