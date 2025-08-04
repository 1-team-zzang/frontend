import Text from '../text/text'

import type { ReactNode } from 'react'

interface Props {
  onNavigate?: ReactNode
  children: ReactNode
  onClick?: ReactNode
}

export default function Header({ onNavigate, children, onClick }: Props) {
  return (
    <nav className="px-5 h-[3.25rem] border-b border-b-gray-10">
      <div className="flex items-center justify-between h-full">
        {onNavigate}
        <Text typography="h2-heading" as="span">
          {children}
        </Text>
        {onClick}
      </div>
    </nav>
  )
}
