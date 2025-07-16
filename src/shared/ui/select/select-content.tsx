import useSelectContext from '../../hooks/use-select-context'

import type { HtmlHTMLAttributes, ReactNode } from 'react'

interface Props extends HtmlHTMLAttributes<HTMLUListElement> {
  children : ReactNode
}

export default function SelectContent( { children, ...restProps }: Props) {
  const { isOpen } = useSelectContext()
  if (!isOpen) {
    return null
  }

  return <ul {...restProps}>{children}</ul>
}
