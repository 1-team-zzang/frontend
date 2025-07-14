import { type ReactNode } from 'react'

import { useEscapeKeydown, useControllableState } from '@/shared/hooks'

import { ModalProvider } from './modal-context'

interface Props {
  defaultOpen?: boolean

  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export default function ModalRoot({ children, defaultOpen, onOpenChange }: Props) {
  const [isOpen, setOpen] = useControllableState({
    prop: defaultOpen,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  })

  useEscapeKeydown({ onEscapeKeyDown: () => setOpen(false) })

  return <ModalProvider value={{ isOpen, onOpenChange: setOpen }}>{children}</ModalProvider>
}
