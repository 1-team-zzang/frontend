import { Switch, SwitchTrigger } from '.'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Example/Switch',
  component: SwitchTrigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchTrigger>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Switch>
      <SwitchTrigger />
    </Switch>
  ),
}
