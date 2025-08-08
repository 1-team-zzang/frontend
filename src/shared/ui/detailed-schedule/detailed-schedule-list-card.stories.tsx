import DetailedScheduleListCard from './detailed-schedule-list-card'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DetailedScheduleListCard> = {
  title: 'shared/detailed-schedule/detailed-schedule-list-card',
  component: DetailedScheduleListCard,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof DetailedScheduleListCard>

export const Default: Story = {
  args: {
    title: '일정1',
    time: '10:00~10:00',
    badgeColor: 'BLUE',
    isVisible: true,
    onCardClick: () => {},
  },
}
