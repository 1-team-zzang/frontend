import { fn } from 'storybook/test'

import Button from './button.tsx'

import type { Meta, StoryObj } from '@storybook/react-vite'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    intent: 'solid', // 기본 intent 값, buttonVariants에 맞게 조정 가능
    disabled: false,
    children: 'Button',
  },
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['solid', 'outlined'], // buttonVariants에 정의된 intent 값들 넣기
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {
  args: {
    intent: 'outlined',
    children: 'Outlined Button',
  },
}

export const Solid: Story = {
  args: {
    intent: 'solid',
    children: 'solid Button',
  },
}
