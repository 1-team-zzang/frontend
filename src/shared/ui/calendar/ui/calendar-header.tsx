import { format } from 'date-fns'

import { useCalendarContext } from '@/shared/ui/calendar/hooks/use-calendar-provider'

import Text from '../../text/text'
import goToCurrentMonth from '../lib/go-to-current-month'

/**
 * @description  YYYY.MM 표시 헤더
 *
 *
 * - 오늘, 공유 부분은 UI만 그려넣었으며 기능구현이 안되어있는 상태입니다.
 * - 공통 Button 컴포넌트 사용해서 만들면 될듯 합니다
 * - ex) 오늘 버튼 누르면 오늘로 이동(goToCurrentMonth 함수 사용하면 될듯 합니다)
 * - ex) 공유 버튼 누르면 공유 url이 생성
 *
 */

export default function CalendarHeader() {
  const { currentMonth, setCurrentMonth, monthRefs } = useCalendarContext()
  return (
    <div className="w-full flex items-center justify-between p-1">
      <Text as="button" typography="b2-normal" onClick={() => goToCurrentMonth({ setCurrentMonth, monthRefs })}>
        오늘
      </Text>
      <Text as="h2" typography="h2-normal">
        {format(currentMonth, 'yyyy.MM')}
      </Text>
      <Text as="button" typography="b2-normal">
        공유
      </Text>
    </div>
  )
}
