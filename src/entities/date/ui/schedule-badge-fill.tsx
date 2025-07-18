import Text from '@/shared/ui/text/text'
import { cva, type VariantProps } from 'class-variance-authority'

import type { ReactNode } from 'react'

/**
 * @description
 * 배경색이 채워진(pill 형태) 일정 뱃지를 렌더링하는 컴포넌트입니다.
 *
 * @param label 뱃지에 표시할 텍스트 (일정 제목)
 * @param color 뱃지의 배경색 (예: 'red', 'blue', 'green', 'yellow', 'purple')
 */
interface Props extends VariantProps<typeof badgeVariants> {
  children: ReactNode
}

const badgeVariants = cva('h-3 w-full text-white rounded-sm z-50', {
  variants: {
    color: {
      red: 'bg-calendar-red',
      yellow: 'bg-calendar-yellow',
      green: 'bg-calendar-green',
      blue: 'bg-calendar-blue',
      purple: 'bg-calendar-purple',
    },
  },
})

export default function ScheduleBadgeFill({ children, color }: Props) {
  return (
    <Text as="span" typography="caption-10" className={badgeVariants({ color })}>
      {children}
    </Text>
  )
}
