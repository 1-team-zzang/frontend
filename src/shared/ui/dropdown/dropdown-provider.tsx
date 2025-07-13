import React, { useState } from 'react'
import createScopedContext from '../../utils/use-custom-context'
import DropDownTrigger from './dropdown-trigger'
import DropDownMenu from './dropdown-menu'
import DropDownMenuItem from './dropdown-menu-ltem'
/**
 * @description 드롭다운 UI 컴포넌트
 * Dropdown 하위 컴포넌트에서 isOpen, handleDropdown, closeDropdown을 사용할 수 있습니다
 *
 * @param isOpen 드롭다운이 열려 있는지 여부
 * @param handleDropdown 드롭다운 토글 함수
 * @param closeDropdown 드롭다운을 닫는 함수
 *
 * @returns [DropdownProvider, useDropdownContext]
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
interface Props {
  isOpen: boolean
  handleDropdown: () => void
  closeDropdown: () => void
}

const createDropdownContext = createScopedContext()
const [DropdownProvider, useDropdownContext] = createDropdownContext<Props>()

export { useDropdownContext }

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
