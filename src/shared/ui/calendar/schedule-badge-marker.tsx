import { cva, type VariantProps } from 'class-variance-authority'

import Text from '../text/text'

/**
 * @description
 * 왼쪽에 색상 막대(marker)가 있는 일정 라벨 컴포넌트입니다.
 * - 색상은 color prop에 따라 결정되며, 일정 제목(label)은 텍스트로 표시됩니다.
 *
 * @param label 일정 라벨에 표시될 텍스트
 * @param color 막대 색상을 나타내는 컬러 키 (예: 'redAlt', 'blueAlt', ...)
 */

interface Props extends VariantProps<typeof badgeVariants> {
  label: string
}

const badgeVariants = cva('w-1 h-3 text-black rounded-sm z-50', {
  variants: {
    color: {
      redAlt: 'bg-calendar-red-alt',
      yellowAlt: 'bg-calendar-yellow-alt',
      greenAlt: 'bg-calendar-green-alt',
      blueAlt: 'bg-calendar-blue-alt',
      purpleAlt: 'bg-calendar-purple-alt',
    },
  },
})

export default function ScheduleBadgeMarker({ label, color }: Props) {
  return (
    <div className="flex items-center gap-1 w-full">
      <div className={badgeVariants({ color })} />
      <Text as="span" typography="caption-10">
        {label}
      </Text>
    </div>
  )
}
