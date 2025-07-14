import { cn, Slot } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 자식 요소를 트리거로 사용할지 여부 */
  asChild?: boolean
}

/**
 * 모달을 여는 트리거 버튼 컴포넌트입니다.
 *
 * 클릭 시 모달을 열고, asChild prop을 통해 커스텀 요소를 트리거로 사용할 수 있습니다.
 *
 * @example
 * ```tsx
 * // 기본 사용법
 * <ModalTrigger>Open Modal</ModalTrigger>
 *
 * // 커스텀 버튼 사용
 * <ModalTrigger asChild>
 *   <button className="px-4 py-2 bg-blue-500 text-white rounded">
 *     커스텀 버튼
 *   </button>
 * </ModalTrigger>
 * ```
 *
 * @param props - ModalTrigger 컴포넌트의 props
 * @param props.asChild - 자식 요소를 트리거로 사용할지 여부 (기본값: false)
 * @param props.children - 버튼에 표시될 내용
 * @param props.className - 추가 CSS 클래스
 * @param props.restProps - 기타 HTML button 속성들
 *
 * @returns 모달을 여는 트리거 버튼 또는 커스텀 요소
 */
export default function ModalTrigger({ children, className, asChild, ...restProps }: Props) {
  const { onOpenChange } = useModalContext()

  const Element = asChild ? Slot : 'button'

  return (
    <Element className={cn('', className)} onClick={() => onOpenChange(true)} {...restProps}>
      {children}
    </Element>
  )
}
