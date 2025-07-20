/**
 * @description 드롭다운에서 사용되는 전역상태, 함수를 위한 context
 *
 */

import { createContextScope } from '@/shared/utils/'

interface Props {
  isOpen: boolean
  handleToggleDropdown: () => void
  handleCloseDropdown: () => void
}

const createDropdownContext = createContextScope()
const [DropdownProvider, useDropdownContext] = createDropdownContext<Props>()

export { DropdownProvider, useDropdownContext }
