/* eslint-disable react/no-multi-comp */

import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState, type ComponentType } from 'react'
import { afterEach, describe, it, expect } from 'vitest'

import { SegmentedControl, SegmentedControlList, SegmentedControlItem, SegmentedControlContent } from '.'

const OPTIONS = [
  {
    label: 'First',
    value: 'First',
  },
  {
    label: 'Second',
    value: 'Second',
  },
  {
    label: 'Third',
    value: 'Third',
  },
]

function UnControlledSegmentedUi() {
  return (
    <SegmentedControl defaultValue={OPTIONS[0].value}>
      <SegmentedControlList>
        {OPTIONS.map((option) => (
          <SegmentedControlItem key={option.value} value={option.value}>
            {option.label}
          </SegmentedControlItem>
        ))}
      </SegmentedControlList>
      <SegmentedControlContent value="First">First content</SegmentedControlContent>
      <SegmentedControlContent value="Second">Second content</SegmentedControlContent>
      <SegmentedControlContent value="Third">Third content</SegmentedControlContent>
    </SegmentedControl>
  )
}

function ControlledSegmentedUi() {
  const [value, setValue] = useState(OPTIONS[0].value)

  return (
    <SegmentedControl value={value} onValueChange={setValue} defaultValue={OPTIONS[0].value}>
      <SegmentedControlList>
        {OPTIONS.map((option) => (
          <SegmentedControlItem key={option.value} value={option.value}>
            {option.label}
          </SegmentedControlItem>
        ))}
      </SegmentedControlList>
      <SegmentedControlContent value="First">First content</SegmentedControlContent>
      <SegmentedControlContent value="Second">Second content</SegmentedControlContent>
      <SegmentedControlContent value="Third">Third content</SegmentedControlContent>
    </SegmentedControl>
  )
}

async function testSegmentedControl(SegmentedControl: ComponentType) {
  render(<SegmentedControl />)

  const firstOption = screen.getByText('First')
  const secondOption = screen.getByText('Second')
  const thirdOption = screen.getByText('Third')

  expect(firstOption).toHaveClass('bg-gray-0')
  expect(secondOption).not.toHaveClass('bg-gray-0')
  expect(thirdOption).not.toHaveClass('bg-gray-0')
  expect(screen.getByText('First content')).toBeInTheDocument()
  expect(screen.queryByText('Second content')).not.toBeInTheDocument()
  expect(screen.queryByText('Third content')).not.toBeInTheDocument()

  await userEvent.click(secondOption)

  expect(secondOption).toHaveClass('bg-gray-0')
  expect(firstOption).not.toHaveClass('bg-gray-0')
  expect(thirdOption).not.toHaveClass('bg-gray-0')
  expect(screen.queryByText('First content')).not.toBeInTheDocument()
  expect(screen.queryByText('Second content')).toBeInTheDocument()
  expect(screen.queryByText('Third content')).not.toBeInTheDocument()

  await userEvent.click(thirdOption)

  expect(thirdOption).toHaveClass('bg-gray-0')
  expect(firstOption).not.toHaveClass('bg-gray-0')
  expect(secondOption).not.toHaveClass('bg-gray-0')
  expect(screen.queryByText('First content')).not.toBeInTheDocument()
  expect(screen.queryByText('Second content')).not.toBeInTheDocument()
  expect(screen.queryByText('Third content')).toBeInTheDocument()
}

describe('SegmentedControl', () => {
  afterEach(cleanup)

  it('Controlled Segmented Control 테스트', async () => {
    await testSegmentedControl(ControlledSegmentedUi)
  })

  it('UnControlled Segmented Control 테스트', async () => {
    await testSegmentedControl(UnControlledSegmentedUi)
  })
})
