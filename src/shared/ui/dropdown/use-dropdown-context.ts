/**
 * @description 드롭다운에서 사용되는 전역상태, 함수를 위한 context
 *
 */

import createScopedContext from '@/shared/utils/use-custom-context'

interface Props {
  isOpen: boolean
  handleToggleDropdown: () => void
  handleCloseDropdown: () => void
}

const createDropdownContext = createScopedContext()
const [DropdownProvider, useDropdownContext] = createDropdownContext<Props>()

export { DropdownProvider, useDropdownContext }
