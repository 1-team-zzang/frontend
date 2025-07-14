import { createContextScope } from '@/shared/utils'

const createModalContext = createContextScope()

export interface ModalContextValue {
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void
}

export const [ModalProvider, useModalContext] = createModalContext<ModalContextValue>()
