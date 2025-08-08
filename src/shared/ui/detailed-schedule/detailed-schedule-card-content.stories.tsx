import DetailedScheduleCardContent from './detailed-schedule-card-content'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DetailedScheduleCardContent> = {
  title: 'shared/detailed-schedule/detailed-card-content',
  component: DetailedScheduleCardContent,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof DetailedScheduleCardContent>

export const Default: Story = {
  args: { label: '공개', value: '나만보기' },
}
