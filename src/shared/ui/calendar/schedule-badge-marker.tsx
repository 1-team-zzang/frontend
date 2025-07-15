import { cva, type VariantProps } from 'class-variance-authority'
import Text from '../text/text'

interface Props extends VariantProps<typeof badgeVariants> {
  label: string
}

const badgeVariants = cva('w-1 h-3 text-black  rounded-sm ', {
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
