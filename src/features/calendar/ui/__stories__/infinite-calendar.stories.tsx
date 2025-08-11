import { InfiniteCalendar } from '..'
import { CalendarProvider } from '../calendar-context'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof InfiniteCalendar> = {
  title: 'features/calendar/infinite-calendar',
  component: InfiniteCalendar,
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
        <div style={{ height: '80vh', border: '1px solid gray' }}>
          <CalendarProvider value={mockContextValue}>
            <Story />
          </CalendarProvider>
        </div>
      )
    },
  ],
}
export default meta

type Story = StoryObj<typeof InfiniteCalendar>

export const Calendar: Story = {
  render: () => <InfiniteCalendar />,
}

export const ShareCalendar: Story = {
  render: () => <InfiniteCalendar disablePrev />,
}
