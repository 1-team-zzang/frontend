import { useControllableState } from '@/shared/hooks'

import { RadioProvider } from './radio-context'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  name: string
  value?: string
  defaultValue?: string
  onChangeValue?: (value: string) => void
}

export default function RadioControlRoot({ name, children, value, defaultValue, onChangeValue }: Props) {
  const [selectedValue, setSelectedValue] = useControllableState({
    prop: value,
    defaultProp: defaultValue || '',
    onChange: onChangeValue,
  })

  return <RadioProvider value={{ name, selectedValue, setSelectedValue }}>{children}</RadioProvider>
}
