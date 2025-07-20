import { useState, type ReactNode } from 'react'

import { DropdownProvider } from './use-dropdown-context'

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
 *        <DropdownTrigger>드롭다운 트리거 버튼</Dropdown.Trigger>
 *        <DropdownMenu width="sm">
 *          <DropdownItem>목록1</Dropdown.Item>
 *          <DropdownItem>목록2</Dropdown.Item>
 *        </DropdownMenu>
 *    </Dropdown>
 *
 */

export default function Dropdown({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleDropdown = () => setIsOpen((prev) => !prev)
  const handleCloseDropdown = () => setIsOpen(false)

  const providerValue = {
    isOpen,
    handleToggleDropdown,
    handleCloseDropdown,
  }

  return (
    <DropdownProvider value={providerValue}>
      <div className="relative">{children}</div>
    </DropdownProvider>
  )
}
