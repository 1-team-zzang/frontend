import Text from '@/shared/ui/text/text'

import type { ReactNode } from 'react'

export default function AppointmentHeader({ children }: { children: ReactNode }) {
  return (
    <div className="border border-gray-10 py-2.5 text-center">
      <Text typography="h2-heading">{children}</Text>
    </div>
  )
}
