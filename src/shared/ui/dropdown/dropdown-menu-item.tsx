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
  const { handleCloseDropdown } = useDropdownContext()

  const handleClick = () => {
    if (onClick) onClick()
    handleCloseDropdown()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === '') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <li onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0} className="w-full cursor-pointer">
      {children}
    </li>
  )
}
