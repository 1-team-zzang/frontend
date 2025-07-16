import Text from '../text/text'

interface Props {
  date: Date
  isCurrentMonth: boolean
}

export default function CalendarFirstDateLabel({ date, isCurrentMonth }: Props) {
  if (date.getDate() !== 1 || !isCurrentMonth) {
    return null
  }

  return (
    <Text as="span" typography="title-heading" className="text-primary-10 absolute top-4 z-40">
      {String(date.getMonth() + 1).padStart(2, '0')}
    </Text>
  )
}
