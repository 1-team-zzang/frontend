import { type Dispatch, type ReactNode, type SetStateAction } from 'react'

import { FloatButton } from '@/shared/ui'

import { Calendar, HeaderContainer, InfiniteCalendar } from '.'

import type { Month } from '../type'

interface Props {
  onDateClick: (date: Date) => void
  headerLeft?: ReactNode
  headerCenter?: ReactNode
  headerRight?: ReactNode
  months?: Month[]
  setMonths?: Dispatch<SetStateAction<Month[]>>
  renderDay?: (date: Date) => ReactNode
  onCreateSchedule?: () => void
  buttonIcon: ReactNode
  children: ReactNode
}

export default function CalendarLayout({
  onDateClick,
  headerLeft,
  headerCenter,
  headerRight,
  months,
  setMonths,
  renderDay,
  onCreateSchedule,
  buttonIcon,
  children,
}: Props) {
  return (
    <Calendar onDateClick={onDateClick}>
      <HeaderContainer left={headerLeft} center={headerCenter} right={headerRight} />

      <InfiniteCalendar months={months} setMonths={setMonths}>
        {renderDay}
      </InfiniteCalendar>

      <FloatButton className="bg-primary-60" size="large" onClick={onCreateSchedule}>
        {buttonIcon}
      </FloatButton>
      {children}
    </Calendar>
  )
}
