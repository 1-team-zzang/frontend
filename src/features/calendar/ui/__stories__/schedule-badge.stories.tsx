import { ScheduleBadge } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof ScheduleBadge> = {
  title: 'features/calendar/schedule-badge',
  component: ScheduleBadge,
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

type Story = StoryObj<typeof ScheduleBadge>

export const Red: Story = {
  args: { color: 'RED', children: '일정' },
}

export const Yellow: Story = {
  args: {
    color: 'YELLOW',
    children: '제목이 긴 일정제목이 긴 일정제목이 긴 일정제목이 긴 일정제목이 긴 일정제목이 긴 일정',
  },
}
