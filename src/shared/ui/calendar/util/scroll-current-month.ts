import { type MutableRefObject, type RefObject } from 'react'

export function scrollToCurrentMonth(
  containerRef: RefObject<HTMLElement | null>,
  monthRefs: MutableRefObject<(HTMLElement | null)[]>,
) {
  const todayMonth = new Date().getMonth()
  const container = containerRef.current
  const target = monthRefs.current[todayMonth]

  if (container && target) {
    const containerTop = container.getBoundingClientRect().top
    const targetTop = target.getBoundingClientRect().top
    const offset = targetTop - containerTop + container.scrollTop

    container.scrollTo({
      top: offset,
      behavior: 'auto', //  'smooth' -> 애니메이션
    })
  }
}
