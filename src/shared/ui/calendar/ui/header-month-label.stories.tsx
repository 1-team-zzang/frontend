import { format } from 'date-fns'
import { useState } from 'react'

import { CalendarProvider } from './calendar-context'
import HeaderMonthLabel from './header-month-label'

import type { Meta, StoryObj } from '@storybook/react-vite'

const mockContextValue = {
  visibleMonth: { year: 2025, month: 8 },
  setVisibleMonth: () => {},
}

const meta: Meta<typeof HeaderMonthLabel> = {
  title: 'shared/calendar/header-month-label',
  component: HeaderMonthLabel,
  decorators: [
    (Story) => (
      <CalendarProvider value={mockContextValue}>
        <Story />
      </CalendarProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof HeaderMonthLabel>

export const CurrentMonth: Story = {}

export const NextMonth: Story = {
  render: () => {
    const currentYear = Number(format(new Date(), 'yyyy'))
    const currentMonth = Number(format(new Date(), 'MM'))
    const [monthState, setMonthState] = useState({ year: currentYear, month: currentMonth })

    const handleNextMonth = () => {
      setMonthState((prev) => {
        const nextMonth = prev.month === 12 ? 1 : prev.month + 1
        const nextYear = prev.month === 12 ? prev.year + 1 : prev.year
        return { year: nextYear, month: nextMonth }
      })
    }

    const handlePrevMonth = () => {
      setMonthState((prev) => {
        const prevMonth = prev.month === 1 ? 12 : prev.month - 1
        const prevYear = prev.month === 1 ? prev.year - 1 : prev.year
        return { year: prevYear, month: prevMonth }
      })
    }

    return (
      <CalendarProvider
        value={{
          visibleMonth: monthState,
          setVisibleMonth: handleNextMonth,
        }}
      >
        <button onClick={handlePrevMonth}>이전달 보기</button>
        <HeaderMonthLabel />
        <button onClick={handleNextMonth}>다음달 보기</button>
      </CalendarProvider>
    )
  },
}
