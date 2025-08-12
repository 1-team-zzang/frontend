import { Text } from '@/shared/ui'

const WEEK = ['일', '월', '화', '수', '목', '금', '토']

export default function WeeklyHeader() {
  return (
    <div className="grid grid-cols-7 border-t border-b border-gray-10 py-0.5">
      {WEEK.map((day) => (
        <Text key={day} typography={'caption-10'} className="text-center">
          {day}
        </Text>
      ))}
    </div>
  )
}
