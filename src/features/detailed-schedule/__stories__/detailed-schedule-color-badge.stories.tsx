import { DetailedScheduleColorBadge } from '../ui'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DetailedScheduleColorBadge> = {
  title: 'shared/detailed-schedule/detailed-schedule-color-badge',
  component: DetailedScheduleColorBadge,
  tags: ['autodocs'],
  argTypes: {
    badgeColor: {
      control: {
        type: 'select',
      },
      options: ['RED', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE'],
    },
  },
}

export default meta

type Story = StoryObj<typeof DetailedScheduleColorBadge>

export const Default: Story = {
  args: {},
}
