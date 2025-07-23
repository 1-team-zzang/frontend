import { useEffect, type ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import { useControllableState } from '@/shared/hooks'

import { RadioProvider } from './radio-context'

interface Props {
  children: ReactNode
  name: string
  value?: string
  defaultValue?: string
  onChangeValue?: (value: string) => void
}

export default function RadioControlRoot({ name, children, value, defaultValue, onChangeValue }: Props) {
  const { watch } = useFormContext()

  const [selectedValue, setSelectedValue] = useControllableState({
    prop: value,
    defaultProp: defaultValue || '',
    onChange: onChangeValue,
  })

  useEffect(() => {
    const watchedValue = watch(name)
    if (!value && !selectedValue && watchedValue) {
      setSelectedValue(watchedValue)
    }
  }, [watch, name, selectedValue, setSelectedValue, value])

  return <RadioProvider value={{ name, selectedValue, setSelectedValue }}>{children}</RadioProvider>
}
