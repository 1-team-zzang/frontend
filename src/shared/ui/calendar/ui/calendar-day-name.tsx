import Text from '../../text/text'

const WEEK = ['일', '월', '화', '수', '목', '금', '토']

export default function CalendarDayName() {
  return (
    <div className="grid grid-cols-7 bg-gray-1 border-b border-b-gray-10 border-t border-t-gray-10 text-center py-[0.0938rem]">
      {WEEK.map((day) => (
        <Text as="span" typography={'caption-10'} key={day}>
          {day}
        </Text>
      ))}
    </div>
  )
}
