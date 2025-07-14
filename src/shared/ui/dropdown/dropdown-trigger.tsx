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

import { useDropdownContext } from './hooks/use-dropdown-context'

export default function DropDownTrigger({ children }: { children: React.ReactNode }) {
  const { handleToggleDropdown } = useDropdownContext()
  return (
    <button type="button" onClick={handleToggleDropdown}>
      {children}
    </button>
  )
}
