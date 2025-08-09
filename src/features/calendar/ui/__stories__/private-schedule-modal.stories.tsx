import { useState } from 'react'

import { PrivateScheduleModal } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof PrivateScheduleModal> = {
  title: 'shared/calendar/private-schedule-modal',
  component: PrivateScheduleModal,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      )
    },
  ],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof PrivateScheduleModal>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleModal = () => setIsOpen(true)

    return (
      <>
        <button onClick={handleModal}>모달열기</button>

        {isOpen && <PrivateScheduleModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </>
    )
  },
}
