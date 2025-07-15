import { useContext } from 'react'

import SelectContext from '../ui/select/select-context'

export default function useSelectContext() {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error('Select components must be used within a <SelectProvider>')
  }
  return context
}
