import { cn } from '@/shared/utils'

import Text from '../text/text'

import type { HTMLAttributes } from 'react'
/**
 * @description 드롭다운 메뉴 리스트
 *
 * @param onClick 메뉴 클릭하면 발생할 이벤트, 없다면 드롭다운 닫힘
 *
 * @returns
 *
 * @example
 * <Dropdown.Item onClick={() => alert('프로필 이동')}>
 *   프로필
 * </Dropdown.Item>
 *
 */

interface Props extends HTMLAttributes<HTMLLIElement> {
  onClick?: () => void
  onClose?: () => void
}

export default function DropDownMenuItem({ children, onClick, className, onClose }: Props) {
  const handleClick = () => {
    onClick?.()
    onClose?.()
  }
  return (
    <Text
      as="li"
      typography="label"
      className={cn('px-4 py-2 whitespace-nowrap cursor-pointer hover:bg-gray-5 active:bg-gray-10 rounded', className)}
      onClick={handleClick}
    >
      {children}
    </Text>
  )
}
