import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

/**
 * 모달의 메인 콘텐츠 컨테이너 컴포넌트입니다.
 *
 * 모달의 실제 내용을 담는 컨테이너로, 화면 중앙에 고정되어 렌더링됩니다.
 *
 * @example
 * ```tsx
 * <ModalContent className="max-w-md">
 *   <ModalTitle>제목</ModalTitle>
 *   <ModalDescription>내용</ModalDescription>
 *   <ModalCloseButton />
 * </ModalContent>
 *
 * // 커스텀 스타일링
 * <ModalContent className="max-w-lg bg-gray-100 rounded-lg">
 *   모달 내용
 * </ModalContent>
 * ```
 *
 * @param props - ModalContent 컴포넌트의 props
 * @param props.children - 모달 콘텐츠 내부에 렌더링될 자식 컴포넌트들
 * @param props.className - 추가 CSS 클래스
 * @param props.restProps - 기타 HTML div 속성들
 *
 * @returns 모달 콘텐츠 컨테이너
 */

export default function ModalContent({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl w-[calc(100%-32px)] py-8 px-4 z-50',
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}
