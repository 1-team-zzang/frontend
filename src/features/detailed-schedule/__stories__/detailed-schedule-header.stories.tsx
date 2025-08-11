import { MemoryRouter } from 'react-router'

import { DetailedScheduleHeader } from '../ui'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DetailedScheduleHeader> = {
  title: 'shared/detailed-schedule/detailed-schedule-hearder',
  component: DetailedScheduleHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof DetailedScheduleHeader>

export const Default: Story = {
  args: {
    date: '8월1일',
  },
}
