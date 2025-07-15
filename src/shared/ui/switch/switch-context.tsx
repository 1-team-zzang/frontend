import { createContextScope } from '@/shared/utils'

const createSwitchContext = createContextScope()

export interface SwitchContextValue {
  isChecked: boolean
  setIsChecked: (isChecked: boolean) => void
}

export const [SwitchProvider, useSwitchContext] = createSwitchContext<SwitchContextValue>()
