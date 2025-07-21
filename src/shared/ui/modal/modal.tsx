import { type ReactNode } from 'react'

import { useEscapeKeydown, useControllableState } from '@/shared/hooks'

import { ModalProvider } from './modal-context'

interface Props {
  /** 모달의 열림 상태 (외부 상태 주입) */
  open?: boolean
  /** 모달의 초기 열림 상태 */
  defaultOpen?: boolean
  /** 모달 상태 변경 시 호출되는 콜백 함수 */
  onOpenChange?: (open: boolean) => void
  /** 모달 내부에 렌더링될 자식 컴포넌트들 */
  children: ReactNode
}

/**
 * 모달의 루트 컴포넌트입니다.
 *
 * 모달의 상태를 관리하고, ESC 키 이벤트를 처리하며,
 * 하위 컴포넌트들에게 모달 컨텍스트를 제공합니다.
 *
 * @example
 * ```tsx
 * <Modal open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
 *   <ModalTrigger>Open Modal</ModalTrigger>
 *   <ModalPortal>
 *     <ModalOverlay />
 *     <ModalContent>
 *       <ModalTitle>제목</ModalTitle>
 *       <ModalDescription>내용</ModalDescription>
 *       <ModalCloseButton />
 *     </ModalContent>
 *   </ModalPortal>
 * </Modal>
 * ```
 *
 * @param props - ModalRoot 컴포넌트의 props
 * @param props.open - 모달의 열림 상태
 * @param props.defaultOpen - 모달의 초기 열림 상태 (기본값: false)
 * @param props.onOpenChange - 모달 상태 변경 시 호출되는 콜백 함수
 * @param props.children - 모달 내부에 렌더링될 자식 컴포넌트들
 *
 * @returns 모달 컨텍스트를 제공하는 Provider 컴포넌트
 */
export default function Modal({ children, open, defaultOpen, onOpenChange }: Props) {
  const [isOpen, setOpen] = useControllableState({
    prop: open,
    defaultProp: defaultOpen || false,
    onChange: onOpenChange,
  })

  useEscapeKeydown({ onEscapeKeyDown: () => setOpen(false) })

  return <ModalProvider value={{ isOpen, onOpenChange: setOpen }}>{children}</ModalProvider>
}
