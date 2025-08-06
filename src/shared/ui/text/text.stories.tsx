import Text from './text'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    as: 'p',
    typography: 'h1-heading',
    children: '테스트 텍스트입니다',
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    typography: {
      control: { type: 'select' },
      options: [
        'title-heading',
        'title-normal',
        'h1-heading',
        'h1-normal',
        'h2-heading',
        'h2-normal',
        'b1-heading',
        'b1-normal',
        'b2-heading',
        'b2-normal',
        'label',
        'caption',
        'caption-10',
      ],
    },
  },
} satisfies Meta<typeof Text>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Text {...args} />,
}
