import { useState } from 'react'

import { IconKebabMenu } from '@/shared/assets/icons'
import { Dropdown, DropDownMenu, DropDownMenuItem } from '@/shared/ui/dropdown'

interface Props {
  onDeleteClick: () => void
}

export default function EditSchduleDropDown({ onDeleteClick }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const onMenuClick = (callback?: () => void) => {
    setIsOpen(false)
    callback?.()
  }

  return (
    <div>
      <IconKebabMenu
        className="cursor-pointer"
        onClick={() => {
          setIsOpen(true)
        }}
      />
      {isOpen && (
        <Dropdown handleClose={() => setIsOpen(false)}>
          <DropDownMenu position="right">
            <DropDownMenuItem>수정</DropDownMenuItem>
            <DropDownMenuItem
              onClick={() => {
                onMenuClick(onDeleteClick)
              }}
            >
              삭제
            </DropDownMenuItem>
          </DropDownMenu>
        </Dropdown>
      )}
    </div>
  )
}
