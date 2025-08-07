import { SegmentedControl, SegmentedControlItem, SegmentedControlList } from '.'

import type { Meta } from '@storybook/react-vite'

const meta = {
  title: 'Example/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>
export default meta

export const Default = {
  render: () => (
    <SegmentedControl defaultValue="tab1">
      <SegmentedControlList>
        <SegmentedControlItem value="tab1">대기중 약속</SegmentedControlItem>
        <SegmentedControlItem value="tab2">응답한 약속</SegmentedControlItem>
        <SegmentedControlItem value="tab3">보낸 약속</SegmentedControlItem>
      </SegmentedControlList>
    </SegmentedControl>
  ),
}
