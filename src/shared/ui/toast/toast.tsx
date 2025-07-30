import { type ReactNode } from 'react'

import { useControllableState } from '@/shared/hooks'

import { ToastProvider } from './toast-context'

/**
 * <Toast>
 * <ToastContent>내용</ToastContent>
 * </Toast>
 */

interface Props {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export default function Toast({ open, children, defaultOpen, onOpenChange }: Props) {
  const [isOpen, setIsOpen] = useControllableState({
    prop: open,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  })
  return <ToastProvider value={{ isOpen, onOpenChange: setIsOpen }}>{children}</ToastProvider>
}
