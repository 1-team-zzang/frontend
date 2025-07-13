import { useDropdownContext } from './dropdown-provider'

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

export default function DropDownTrigger({ children }: { children: React.ReactNode }) {
  const { handleDropdown } = useDropdownContext()
  return (
    <button type="button" onClick={handleDropdown}>
      {children}
    </button>
  )
}
