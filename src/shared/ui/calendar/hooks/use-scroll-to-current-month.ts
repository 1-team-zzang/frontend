import { useEffect, type RefObject } from 'react'

interface Props {
  currentMonthRef: RefObject<HTMLDivElement | null>
}

export default function useScrollToCurrentMonth({ currentMonthRef }: Props) {
  useEffect(() => {
    currentMonthRef.current?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }, [])
}
