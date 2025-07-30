import Text from '../text/text'

import type { ReactNode } from 'react'

export default function ToastContent({ children }: { children: ReactNode }) {
  return (
    <div className="w-fit py-[0.625rem] px-4 bg-gray-100 text-white rounded-lg z-toast">
      <Text as="span" typography="b2-normal">
        {children}
      </Text>
    </div>
  )
}
