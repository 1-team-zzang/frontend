import { cva, type VariantProps } from 'class-variance-authority'
import Text from '../text/text'

interface Props extends VariantProps<typeof badgeVariants> {
  label: string
}

const badgeVariants = cva('h-3 w-full text-white rounded-sm', {
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

export default function ScheduleBadgeFill({ label, color }: Props) {
  return (
    <Text as="span" typography="caption-10" className={badgeVariants({ color })}>
      {label}
    </Text>
  )
}
