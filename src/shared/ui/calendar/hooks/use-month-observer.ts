import { useEffect, type RefObject } from 'react'

/**
 *
 * @param refs : 각 월을 담는 div들의 ref 배열(ex. 1월)
 * @param containerRef : 스크롤이 일어나는 div
 * @param onVisibleMonthChange: 화면에 보이는 달이 바뀌었을때 실행되는 콜백
 */

interface Props {
  refs: (HTMLDivElement | null)[]
  containerRef: RefObject<HTMLDivElement | null>
  onVisibleMonthChange: (monthIndex: number) => void
}

export default function useMonthObserver({ refs, containerRef, onVisibleMonthChange }: Props) {
  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting) //현재 화면에 보이는 월
        if (visible) {
          const idx = refs.findIndex((ref) => ref === visible.target) //화면에 보이는 idx 저장
          if (idx !== -1) {
            onVisibleMonthChange(idx)
          } //부모한테 화면에 보이는 idx 전달
        }
      },
      {
        root: containerRef.current,
        threshold: 0.4,
      },
    )

    refs.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [refs, containerRef, onVisibleMonthChange])
}
