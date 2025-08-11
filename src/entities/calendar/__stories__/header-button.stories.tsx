import { HeaderButton } from '../ui'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof HeaderButton> = {
  title: 'features/calendar/header-button',
  component: HeaderButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: '클릭됨',
    },
  },
}
export default meta

type Story = StoryObj<typeof HeaderButton>

export const ShareButton: Story = {
  args: { children: '공유하기' },
}
