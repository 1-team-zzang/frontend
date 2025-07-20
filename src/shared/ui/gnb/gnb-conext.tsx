import { createContextScope } from '@/shared/utils'

const createRadioContext = createContextScope()

interface GNBContextValue {
  isOpen: boolean
  handleOpenSidebar: () => void
  handleCloseSidebar: () => void
}

export const [GNBProvider, useGNBContext] = createRadioContext<GNBContextValue>()
