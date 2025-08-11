import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router'

import { ErrorFallback, FloatButton } from '@/shared/ui'

import { Calendar, HeaderLayout, InfiniteCalendar } from '../../features/calendar/ui'

import type { Month } from '../../entities/schedule/type'

interface Props {
  onDateClick?: (date: Date) => void //날짜 셀 클릭시 실행되는 함수
  headerLeft?: ReactNode //헤더 왼쪽
  headerCenter?: ReactNode //헤더 가운데, 없으면 월 라벨 표시
  headerRight?: ReactNode //헤더 오른쪽
  months?: Month[] //월 배열, 초기값: 이전달, 현재달, 다음달
  isPast?: boolean //오늘 이전의 날짜 투명하게 표시
  setMonths?: Dispatch<SetStateAction<Month[]>>
  renderDay?: (date: Date) => ReactNode // 셀 안에 표시될 컴포넌트들
  onCreateSchedule?: () => void //플로팅버튼 클릭시 실행되는 함수
  buttonIcon?: ReactNode //플로팅 버튼 안에 표시될 아이콘
  children?: ReactNode
}

export default function CalendarLayout({
  onDateClick,
  headerLeft,
  headerCenter,
  headerRight,
  months,
  setMonths,
  isPast,
  renderDay,
  onCreateSchedule,
  buttonIcon,
  children,
}: Props) {
  const { reset } = useQueryErrorResetBoundary()
  const navigate = useNavigate()
  return (
    <Calendar onDateClick={onDateClick}>
      <HeaderLayout left={headerLeft} center={headerCenter} right={headerRight} />
      <ErrorBoundary
        onReset={reset}
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} navigate={navigate} />
        )}
      >
        <InfiniteCalendar months={months} setMonths={setMonths} isPast={isPast}>
          {renderDay}
        </InfiniteCalendar>
      </ErrorBoundary>

      <FloatButton className="bg-primary-60" size="large" onClick={onCreateSchedule}>
        {buttonIcon}
      </FloatButton>
      {children}
    </Calendar>
  )
}
