import SelectProvider from './select-provider'

import type { ReactNode } from 'react'

interface Props {
    children: ReactNode
    defaultValue?: string
}

export default function Select({ children, defaultValue } : Props) {
  return (
    <SelectProvider defaultValue={defaultValue}>
      {children}
    </SelectProvider>
  )
}
