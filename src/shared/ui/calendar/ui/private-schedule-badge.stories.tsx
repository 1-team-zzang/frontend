import PrivateScheduleBadge from './private-schedule-badge'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof PrivateScheduleBadge> = {
  title: 'shared/calendar/private-schedule-badge',
  component: PrivateScheduleBadge,
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

type Story = StoryObj<typeof PrivateScheduleBadge>

export const Default: Story = {}
