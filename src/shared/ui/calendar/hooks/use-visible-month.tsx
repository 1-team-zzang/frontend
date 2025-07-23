import { useEffect, useRef, useState, type RefObject } from 'react'

/**
 *
 * 캘린더 뷰에서 스크롤에 따라 현재 화면에 보이는 월(index)을 추적하는 커스텀 훅입니다.
 * IntersectionObserver를 사용하여 각 월 컴포넌트(월별 div) 중,
 * 현재 뷰포트 내에 절반 이상 보이는 첫 번째 월의 인덱스를 `visibleMonth`로 설정합니다.
 *
 * @param containerRef - 스크롤 가능한 캘린더 컨테이너의 ref
 * @returns {{
 *   visibleMonth: number | null; // 현재 화면에 보이는 월 인덱스 (0~11)
 *   monthRefs: React.MutableRefObject<(HTMLDivElement | null)[]>; // 각 월을 참조하는 ref 배열
 * }}
 *
 */

export default function useVisibleMonth(containerRef: RefObject<HTMLDivElement | null>) {
  const [visibleMonth, setVisibleMonth] = useState<number | null>(null)
  const monthRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visibleEntry) {
          const index = monthRefs.current.findIndex((ref) => ref === visibleEntry.target)
          if (index !== -1) {
            setVisibleMonth(index)
          }
        }
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      },
    )

    monthRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [containerRef])

  return { visibleMonth, monthRefs }
}
