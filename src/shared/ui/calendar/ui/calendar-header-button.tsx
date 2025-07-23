import Text from '../../text/text'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function CalendarHeaderButton({ children, ...restProps }: Props) {
  return (
    <Text as="button" typography="b2-normal" {...restProps}>
      {children}
    </Text>
  )
}
