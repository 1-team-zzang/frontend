import Text from '../text/text'

interface DetailRowProps {
  label: string
  value: string
}

export default function DetailedScheduleCardContent({ label, value }: DetailRowProps) {
  return (
    <div className="flex gap-2">
      <Text as="span" typography="b2-heading">
        {label}
      </Text>
      <Text as="span" typography="b2-normal">
        {value}
      </Text>
    </div>
  )
}
