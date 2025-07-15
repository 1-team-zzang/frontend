/* eslint-disable react/no-multi-comp */
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState, type ComponentType } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

import { SwitchRoot, SwitchTrigger } from './index'

function ControlledSwitch() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <SwitchRoot checked={isChecked} onCheckedChange={setIsChecked}>
      <SwitchTrigger />
    </SwitchRoot>
  )
}

function UncontrolledSwitch() {
  return (
    <SwitchRoot>
      <SwitchTrigger />
    </SwitchRoot>
  )
}

async function testSwitchComponent(Component: ComponentType) {
  render(<Component />)

  const checkbox = screen.getByRole('switch')
  expect(checkbox).not.toBeChecked()

  await userEvent.click(checkbox)
  expect(checkbox).toBeChecked()
}

describe('SwitchRoot', () => {
  afterEach(cleanup)

  it('Controlled Switch 동작 테스트', async () => {
    await testSwitchComponent(ControlledSwitch)
  })

  it('Uncontrolled Switch 동작 테스트', async () => {
    await testSwitchComponent(UncontrolledSwitch)
  })
})
