/* eslint-disable react/no-multi-comp */
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState, type ComponentType } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

import { Switch, SwitchTrigger } from './index'

function ControlledSwitch() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Switch checked={isChecked} onCheckedChange={setIsChecked}>
      <SwitchTrigger />
    </Switch>
  )
}

function UncontrolledSwitch() {
  return (
    <Switch>
      <SwitchTrigger />
    </Switch>
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
