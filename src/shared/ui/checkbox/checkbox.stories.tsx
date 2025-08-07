import { devLog } from '@/shared/utils'

import Checkbox from './checkbox'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Checkbox> = {
  title: 'Shared/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    textLabel: '체크박스 라벨',
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Controlled: Story = {
  args: {
    checked: true,
    onCheckedChange: (checked) => {
      devLog('log', 'checked', checked)
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}
