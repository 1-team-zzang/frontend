import { createContextScope } from '@/shared/utils'

const createModalContext = createContextScope()

export interface ModalContextValue {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export const [ModalProvider, useModalContext] = createModalContext<ModalContextValue>()
