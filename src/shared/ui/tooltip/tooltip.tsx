import { useState, type HTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

import { TooltipProvider } from './tooltip-context'

/**
 * Tooltip 컴포넌트
 *
 * @param {import('react').HTMLAttributes<HTMLDivElement>} props - div의 기본 속성들 (className, children 등)
 * @param {React.ReactNode} props.children - TooltipTrigger, TooltipMessage 등 하위 컴포넌트들
 * @param {string} [props.className] - 추가로 적용할 CSS 클래스 이름
 * @returns {JSX.Element} Tooltip 상태를 Context로 감싸 렌더링하는 div
 *
 * @example
 * <Tooltip>
 *  <TooltipTrigger>
 *    <IconClose/>
 *  </TooltipTrigger>
 *  <TooltipMessage>툴팁 메시지입니다</TooltipMessage>
 * </Tooltip>
 */
export default function Tooltip({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <TooltipProvider value={{ isShow, setIsShow }}>
      <div className={cn('relative w-fit', className)} {...restProps}>
        {children}
      </div>
    </TooltipProvider>
  )
}
