import { createPortal } from 'react-dom'

import { useModalContext } from './modal-context'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  containerElement?: HTMLElement
}

export default function ModalPortal({ children, containerElement }: Props) {
  const { isOpen } = useModalContext()

  const container = containerElement ?? document.body

  return isOpen ? createPortal(children, container) : null
}
