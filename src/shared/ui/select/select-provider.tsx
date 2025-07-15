import { useState, type ReactNode } from 'react'

import SelectContext, { type SelectContextType } from './select-context'

interface Props {
  children: ReactNode
  defaultValue?: string | null
}

export default function SelectProvider({ children, defaultValue = null }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue)

  const toggleOpen = () => setIsOpen(prev => !prev)
  const selectValue = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  const value: SelectContextType = { isOpen, toggleOpen, selectedValue, selectValue }

  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  )
}
