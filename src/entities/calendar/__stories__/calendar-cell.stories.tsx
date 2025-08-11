import { CalendarProvider } from '../model/calendar-context'
import { AppointmentBadge, CalendarCell } from '../ui'

import type { Meta, StoryObj } from '@storybook/react-vite'

const mockContextValue = {
  visibleMonth: { year: 2025, month: 8 },
  setVisibleMonth: () => {},
}

const meta: Meta<typeof CalendarCell> = {
  title: 'features/calendar/calendar-cell',
  component: CalendarCell,
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

type Story = StoryObj<typeof CalendarCell>

export const MonthOfFirstDate: Story = {
  render: (args) => (
    <CalendarCell {...args}>
      <AppointmentBadge color="RED">약속일정</AppointmentBadge>
    </CalendarCell>
  ),
  args: {
    date: { year: 2025, month: 8, day: 1 },
    showMonthLabel: true,
  },
}

export const Date: Story = {
  render: (args) => (
    <CalendarCell {...args}>
      <AppointmentBadge color="BLUE">약속일정</AppointmentBadge>
    </CalendarCell>
  ),
  args: {
    date: { year: 2025, month: 8, day: 10 },
    showMonthLabel: false,
  },
}
