import { createContextScope } from '@/shared/utils'

const createModalContext = createContextScope()

export interface ToastContextValue {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const [ToastProvider, ToastContext] = createModalContext<ToastContextValue>()
