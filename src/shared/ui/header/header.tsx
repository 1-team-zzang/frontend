import Text from '../text/text'

import type { ReactNode } from 'react'

interface Props {
  leftButton?: ReactNode
  children: ReactNode
  rightButton?: ReactNode
}

export default function Header({ leftButton, children, rightButton }: Props) {
  return (
    <nav className="px-2.5 h-[3.25rem] border-b border-b-gray-10">
      <div className="flex items-center justify-between h-full">
        {leftButton}
        <Text typography="h2-heading" as="span">
          {children}
        </Text>
        {rightButton}
      </div>
    </nav>
  )
}
