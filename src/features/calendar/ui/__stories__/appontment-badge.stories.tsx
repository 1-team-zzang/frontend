import { AppointmentBadge } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof AppointmentBadge> = {
  title: 'features/calendar/appointment-badge',
  component: AppointmentBadge,
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof AppointmentBadge>

export const Red: Story = {
  args: {
    color: 'RED',
    children: '레드약속',
  },
}

export const Blue: Story = {
  args: {
    color: 'BLUE',
    children: '블루약속',
  },
}

export const Yellow: Story = {
  args: {
    color: 'YELLOW',
    children: '옐로우약속',
  },
}

export const Green: Story = {
  args: {
    color: 'GREEN',
    children: '그린약속',
  },
}

export const Purple: Story = {
  args: {
    color: 'PURPLE',
    children: '퍼플약속',
  },
}
