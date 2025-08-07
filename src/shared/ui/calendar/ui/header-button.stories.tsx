import HeaderButton from './header-button'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof HeaderButton> = {
  title: 'shared/calendar/header-button',
  component: HeaderButton,
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof HeaderButton>

export const ShareButton: Story = {
  args: { children: '공유하기' },
}
