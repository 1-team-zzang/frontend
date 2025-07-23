import type { ReactNode } from 'react'

export default function CalendarHeader({ children }: { children: ReactNode }) {
  return <div className="sticky top-0 z-10 bg-white flex justify-between px-5 py-[0.625rem]">{children}</div>
}
