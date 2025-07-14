import { createPortal } from 'react-dom'

import { useModalContext } from './modal-context'

import type { ReactNode } from 'react'

interface Props {
  /** Portal로 렌더링할 자식 컴포넌트들 */
  children: ReactNode
  /** Portal이 렌더링될 컨테이너 요소 (기본값: document.body) */
  containerElement?: HTMLElement
}

/**
 * 모달을 Portal로 렌더링하는 컴포넌트입니다.
 *
 * 모달이 DOM 계층 구조와 독립적으로 렌더링되어 z-index나 overflow 문제를 해결합니다.
 * 모달이 열려있을 때만 Portal을 생성합니다.
 *
 * @example
 * ```tsx
 * <ModalPortal>
 *   <ModalOverlay />
 *   <ModalContent>
 *     <ModalTitle>제목</ModalTitle>
 *     <ModalDescription>내용</ModalDescription>
 *   </ModalContent>
 * </ModalPortal>
 *
 * // 커스텀 컨테이너 사용
 * <ModalPortal containerElement={customContainer}>
 *   모달 내용
 * </ModalPortal>
 * ```
 *
 * @param props - ModalPortal 컴포넌트의 props
 * @param props.children - Portal로 렌더링할 자식 컴포넌트들
 * @param props.containerElement - Portal이 렌더링될 컨테이너 요소
 *
 * @returns Portal로 렌더링된 모달 컴포넌트들 또는 null
 */
export default function ModalPortal({ children, containerElement }: Props) {
  const { isOpen } = useModalContext()

  const container = containerElement ?? document.body

  return isOpen ? createPortal(children, container) : null
}
