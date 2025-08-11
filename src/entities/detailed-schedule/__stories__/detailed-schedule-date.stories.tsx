import { DetailedScheduleDate } from '../ui'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DetailedScheduleDate> = {
  title: 'shared/detailed-schedule/detailed-schedule-date',
  component: DetailedScheduleDate,
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof DetailedScheduleDate>

export const Default: Story = {
  args: {
    date: '2025-08-01',
    weekday: '금',
    AmPm: '오후',
    time: '01:00',
  },
}
