import type { MutableRefObject } from 'react'

/**
 * 현재 월로 스크롤 이동
 * @param setCurrentMonth - 현재 월을 설정하는 함수
 * @param monthRefs - 각 월 요소들의 ref 배열
 */
export default function goToCurrentMonth({
  setCurrentMonth,
  monthRefs,
}: {
  setCurrentMonth: (date: Date) => void
  monthRefs: MutableRefObject<(HTMLDivElement | null)[]>
}) {
  const today = new Date()
  const thisMonthIndex = today.getMonth()
  setCurrentMonth(today)

  monthRefs.current[thisMonthIndex]?.scrollIntoView({
    behavior: 'smooth',
  })
}
