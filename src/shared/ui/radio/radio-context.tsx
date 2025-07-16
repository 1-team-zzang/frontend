import { createContextScope } from '@/shared/utils'

const createRadioContext = createContextScope()

export interface RadioContextValue {
  name: string
  selectedValue: string
  setSelectedValue: (value: string) => void
}

export const [RadioProvider, useRadioContext] = createRadioContext<RadioContextValue>()
