/**
 * @description 드롭다운 트리거 버튼
 *
 * @param
 *
 * @returns
 *
 * @example
 *
 */

import { useDropdownContext } from './use-dropdown-context'

import type { ReactNode } from 'react'

export default function DropDownTrigger({ children }: { children: ReactNode }) {
  const { handleToggleDropdown } = useDropdownContext()
  return (
    <button type="button" onClick={handleToggleDropdown}>
      {children}
    </button>
  )
}
