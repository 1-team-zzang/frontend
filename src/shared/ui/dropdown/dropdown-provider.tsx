import React, { useState } from 'react'
import DropDownTrigger from './dropdown-trigger'
import DropDownMenu from './dropdown-menu'
import DropDownMenuItem from './dropdown-menu-ltem'
import { DropdownProvider } from './hooks/useDropDownContext'
/**
 * @description 드롭다운 UI 컴포넌트
 * DropdownProvider로 context를 하위 컴포넌트에 전달합니다
 *
 * <하위컴포넌트>
 * DropDown.Trigger - 드롭다운 트리거 버튼
 * DropDown.Menu - 드롭다운 메뉴 상자
 * Dropdown.Item - 드롭다운 메뉴 리스트
 *
 * @example
 *    <Dropdown>
 *        <Dropdown.Trigger>드롭다운 트리거 버튼</Dropdown.Trigger>
 *        <Dropdown.Menu width="sm">
 *          <Dropdown.Item>목록1</Dropdown.Item>
 *          <Dropdown.Item>목록2</Dropdown.Item>
 *        </Dropdown.Menu>
 *    </Dropdown>
 *
 */

export default function Dropdown({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleDropdown = () => setIsOpen((prev) => !prev)
  const closeDropdown = () => setIsOpen(false)

  const providerValue = {
    isOpen,
    handleDropdown,
    closeDropdown,
  }

  return (
    <DropdownProvider value={providerValue}>
      <div className="relative">{children}</div>
    </DropdownProvider>
  )
}

Dropdown.Trigger = DropDownTrigger
Dropdown.Menu = DropDownMenu
Dropdown.Item = DropDownMenuItem
