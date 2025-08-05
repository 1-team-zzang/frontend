import { IconQuestionMark } from '@/shared/assets'

import { Tooltip, TooltipMessage, TooltipTrigger } from '.'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Example/Tooltip',
  component: TooltipMessage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    position: 'top',
    arrowPosition: 'bottom',
    arrowAlign: 'center',
    children: '테스트 툴팁입니다 안녕하세요',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
    arrowPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
    arrowAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof TooltipMessage>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '600px', height: '300px' }} className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger>
          <button>
            <IconQuestionMark />
          </button>
        </TooltipTrigger>
        <TooltipMessage {...args} />
      </Tooltip>
    </div>
  ),
}
