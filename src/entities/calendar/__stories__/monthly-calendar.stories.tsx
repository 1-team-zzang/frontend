import { format } from 'date-fns'

import { CalendarProvider } from '../model/calendar-context'
import { MonthlyCalendar } from '../ui'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof MonthlyCalendar> = {
  title: 'features/calendar/monthly-calendar',
  component: MonthlyCalendar,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const mockContextValue = {
        visibleMonth: { year: 2025, month: 8 },
        setVisibleMonth: () => {},
        setSelectedDate: () => {},
        selectedDate: null,
        setVisibleYear: () => {},
      }

      return (
        <div>
          <CalendarProvider value={mockContextValue}>
            <Story />
          </CalendarProvider>
        </div>
      )
    },
  ],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof MonthlyCalendar>

const currentYear = Number(format(new Date(), 'yyyy'))
const currentMonth = Number(format(new Date(), 'MM')) - 1
export const Default: Story = {
  args: {
    year: currentYear,
    month: currentMonth,
  },
}
