import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

/**
 * 모달의 제목 컴포넌트입니다.
 *
 * 모달의 목적을 명확히 하는 제목을 표시합니다.
 * 접근성을 위해 h3 태그를 사용합니다.
 *
 * @example
 * ```tsx
 * <ModalTitle>모달 제목</ModalTitle>
 *
 * // 커스텀 스타일링
 * <ModalTitle className="text-2xl font-bold text-blue-600">
 *   커스텀 제목
 * </ModalTitle>
 * ```
 *
 * @param props - ModalTitle 컴포넌트의 props
 * @param props.children - 제목 텍스트
 * @param props.className - 추가 CSS 클래스
 * @param props.restProps - 기타 HTML h3 속성들
 *
 * @returns 모달 제목 요소
 */
export default function ModalTitle({ children, className, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-xl font-semibold', className)} {...restProps}>
      {children}
    </h3>
  )
}
