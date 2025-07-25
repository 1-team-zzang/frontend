import type { ReactNode } from 'react'

export default function AppointmentCard({ children }: { children: ReactNode }) {
  return <div className="w-full rounded-[0.625rem] border border-gray-20 overflow-hidden">{children}</div>
}
