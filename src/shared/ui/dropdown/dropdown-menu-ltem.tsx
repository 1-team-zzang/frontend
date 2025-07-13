import React from 'react'
import { useDropdownContext } from './hooks/useDropDownContext'
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

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export default function DropDownMenuItem({ children, onClick }: Props) {
  const { closeDropdown } = useDropdownContext()

  const handleClick = () => {
    if (onClick) onClick()
    closeDropdown()
  }

  return (
    <li onClick={handleClick} className="w-full cursor-pointer">
      {children}
    </li>
  )
}
