import Text from '../text/text'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ToastContent({ children }: Props) {
  return (
    <Text as="span" typography="b2-normal" className="text-white">
      {children}
    </Text>
  )
}
