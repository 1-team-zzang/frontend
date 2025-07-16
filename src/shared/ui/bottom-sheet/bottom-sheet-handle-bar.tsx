import { cn } from '@/shared/utils'

import type { HTMLAttributes, KeyboardEvent } from 'react'

interface BottomSheetHandleBarProps extends HTMLAttributes<HTMLDivElement> {
  onDragStart?: () => void
  onDragEnd?: () => void
}

/**
 * 바텀 시트의 드래그 핸들바 컴포넌트
 *
 * 바텀 시트를 드래그하여 조작할 수 있는 핸들바를 제공합니다.
 * 키보드 접근성을 지원하며, Enter나 Space 키로도 조작할 수 있습니다.
 *
 * @example
 * ```tsx
 * <BottomSheetHandleBar
 *   onDragStart={() => console.log('드래그 시작')}
 *   onDragEnd={() => console.log('드래그 종료')}
 * />
 * ```
 */
export default function BottomSheetHandleBar({
  className,
  onDragStart,
  onDragEnd: _onDragEnd,
  onKeyDown,
  ...restProps
}: BottomSheetHandleBarProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    // Enter 또는 Space 키로 핸들바 활성화
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onDragStart?.()
    }

    onKeyDown?.(event)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="바텀 시트 핸들바 - 드래그하여 시트를 조작할 수 있습니다"
      className={cn(
        'absolute top-4 left-1/2 -translate-x-1/2 h-1 w-14 bg-gray-20 rounded-full cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className,
      )}
      onKeyDown={handleKeyDown}
      {...restProps}
    />
  )
}
