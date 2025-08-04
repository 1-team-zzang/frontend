import Text from '../text/text'

interface Props {
  date: string
  weekday: string
  AmPm: string
  time: string
}

export default function DetailedScheduleDate({ date, weekday, AmPm, time }: Props) {
  return (
    <div>
      <div className="flex flex-col items-start justify-center">
        <Text typography="b2-normal" className="font-bold">
          {date} ({weekday})
        </Text>
        <div className="flex items-end gap-1">
          <Text typography="b2-normal">{AmPm}</Text>
          <Text typography="h1-normal" className="font-bold">
            {time}
          </Text>
        </div>
      </div>
    </div>
  )
}
