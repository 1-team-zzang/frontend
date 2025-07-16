import Text from '../text/text'

interface Props {
  date: Date
  isThisMonthDate: boolean
}

export default function CalendarFirstDateLabel({ date, isThisMonthDate }: Props) {
  if (date.getDate() !== 1 || !isThisMonthDate) {
    return null
  }

  return (
    <Text as="span" typography="title-heading" className="text-primary-10 absolute top-4 z-40">
      {String(date.getMonth() + 1).padStart(2, '0')}
    </Text>
  )
}
