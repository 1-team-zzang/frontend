import { useControllableState } from '@/shared/hooks'

import { SwitchProvider } from './switch-context'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export default function SwitchRoot({ children, checked, defaultChecked, onCheckedChange }: Props) {
  const [isChecked, setIsChecked] = useControllableState({
    prop: checked,
    defaultProp: defaultChecked || false,
    onChange: onCheckedChange,
  })

  return <SwitchProvider value={{ isChecked, setIsChecked }}>{children}</SwitchProvider>
}
