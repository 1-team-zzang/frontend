import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

/**
 * 모달의 설명 텍스트 컴포넌트입니다.
 *
 * 모달의 내용이나 추가 정보를 설명하는 텍스트를 표시합니다.
 *
 * @example
 * ```tsx
 * <ModalDescription>모달에 대한 설명입니다.</ModalDescription>
 *
 * // 커스텀 스타일링
 * <ModalDescription className="text-gray-600 text-sm">
 *   상세한 설명 텍스트
 * </ModalDescription>
 * ```
 *
 * @param props - ModalDescription 컴포넌트의 props
 * @param props.children - 설명 텍스트
 * @param props.className - 추가 CSS 클래스
 * @param props.restProps - 기타 HTML p 속성들
 *
 * @returns 모달 설명 텍스트 요소
 */
export default function ModalDescription({ children, className, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('', className)} {...restProps}>
      {children}
    </p>
  )
}
