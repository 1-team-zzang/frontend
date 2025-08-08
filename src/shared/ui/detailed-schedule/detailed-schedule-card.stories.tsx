import DetailedScheduleCard from './detailed-schedule-card'

import type { Schedule } from '@/entities/schedule/models'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DetailedScheduleCard> = {
  title: 'shared/detailed-schedule/detailed-schedule-card',
  component: DetailedScheduleCard,
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

const mockData: Schedule = {
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
}

type Story = StoryObj<typeof DetailedScheduleCard>

export const Default: Story = {
  args: {
    badgeColor: mockData.color,
    title: mockData.title,
    startDate: mockData.startAt,
    endDate: mockData.endAt,
    repeat: mockData.repeatRule,
    visible: mockData.isVisible,
    content: mockData.content,
  },
}
