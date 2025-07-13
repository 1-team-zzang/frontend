import createScopedContext from '../../../utils/use-custom-context'

/**
 * @description 드롭다운에서 사용되는 전역상태, 함수를 위한 context
 *
 */

interface Props {
  isOpen: boolean
  handleDropdown: () => void
  closeDropdown: () => void
}

const createDropdownContext = createScopedContext()
const [DropdownProvider, useDropdownContext] = createDropdownContext<Props>()

export { DropdownProvider, useDropdownContext }
