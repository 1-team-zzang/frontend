import { isSameMonth } from 'date-fns'

import CalendarCell from './calendar-cell'

/**
 * @description
 * 한 달 단위의 날짜 CalendarCell 컴포넌트로 렌더링하는 컴포넌트입니다.
 * CalendarCell에 variants(날짜상태)를 계산하여 전달합니다
 * - 날짜 배열(dates[10])을 기준으로 해당 달을 대표하는 월을 판단합니다.
 * - 각 날짜 셀은 CalendarDateCell을 통해 렌더링되며,
 *   오늘/토요일/일요일 등의 상태를 props로 전달받아 스타일링됩니다.
 */
interface Props {
  dates: Date[]
}

export default function CalendarMonth({ dates }: Props) {
  const month = dates[Math.floor(dates.length / 2)] || dates[0]

  return (
    <div className="grid grid-cols-7">
      {dates.map((date) => (
        <CalendarCell key={date.getTime()} date={date} isThisMonthDate={isSameMonth(date, month)} />
      ))}
    </div>
  )
}
