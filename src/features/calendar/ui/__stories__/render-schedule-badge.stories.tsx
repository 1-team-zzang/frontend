import { RenderScheduleBadges } from '..'

import type { Schedule } from '@/entities/schedule/models'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof RenderScheduleBadges> = {
  title: 'shared/calendar/render-schedule-badge',
  component: RenderScheduleBadges,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '80px' }}>
          <Story />
        </div>
      )
    },
  ],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof RenderScheduleBadges>

const mockData: Record<string, Schedule[]> = {
  '2025-09-01': [
    {
      scheduleId: 12,
      title: '9월 비공개 일정',
      content: '일정',
      startAt: '2025-09-01 10:00',
      endAt: '2025-09-01 10:00',
      isRepeated: true,
      repeatRule: 'WEEKLY',
      isVisible: false,
      createdAt: '2025-07-23T01:02:10.821353',
      modifiedAt: '2025-07-23T01:02:10.821353',
      isAllDay: false,
      repeatType: 'DATE',
      repeatCount: 2,
      repeatEndAt: '2025-07-30 14:00',
      color: 'RED',
      userId: 9,
      appointmentId: null,
    },
    {
      scheduleId: 1,
      title: '9월 공개 일정',
      content: '일정',
      startAt: '2025-08-01 10:00',
      endAt: '2025-08-01 10:00',
      isRepeated: true,
      repeatRule: 'WEEKLY',
      isVisible: false,
      createdAt: '2025-07-23T01:02:10.821353',
      modifiedAt: '2025-07-23T01:02:10.821353',
      isAllDay: false,
      repeatType: 'DATE',
      repeatCount: 2,
      repeatEndAt: '2025-07-30 14:00',
      color: 'RED',
      userId: 9,
      appointmentId: null,
    },
  ],
}
const date = new Date('2025-09-01T00:00:00')

export const IsMyCalendar: Story = {
  args: { date: date, scheduleMap: mockData, isMyCalendar: true },
}

export const IsShareCalendar: Story = {
  args: { date: date, scheduleMap: mockData, isShareCalendar: true },
}
