import useControllableState from '@/shared/hooks/use-controllable-state'

import { ModalProvider } from './modal-context'

import type { ReactNode } from 'react'

interface Props {
  defaultOpen: boolean
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

export default function ModalRoot({ children, defaultOpen, onOpenChange }: Props) {
  const [isOpen, setOpen] = useControllableState({
    prop: defaultOpen,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  })

  return <ModalProvider value={{ isOpen, onOpenChange: setOpen }}>{children}</ModalProvider>
}
