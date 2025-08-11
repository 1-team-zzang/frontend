import { useQueries } from '@tanstack/react-query'
import { format, startOfMonth, endOfMonth } from 'date-fns'

import { groupByDate, scheduleQueryKeys, type Schedule } from '@/entities/schedule/lib'

import { getFriendSchedule } from '../api'

import type { Month } from '@/entities/schedule/type'

interface Props {
  months: Month[]
  friendId: string
}

export function useFriendSchedulesByuserId({ months, friendId }: Props) {
  const queries = useQueries({
    queries: months.map(({ year, month }) => {
      const baseDate = new Date(year, month)
      const start = format(startOfMonth(baseDate), 'yyyy-MM-dd')
      const end = format(endOfMonth(baseDate), 'yyyy-MM-dd')
      return {
        queryKey: scheduleQueryKeys.userSchedules(friendId, start, end),
        queryFn: () => getFriendSchedule({ start, end, friendId }),
        enabled: !!friendId,
        staleTime: 1000 * 60 * 5,
      }
    }),
  })

  // queries의 결과를 바탕으로 날짜별 일정 map 만들기
  const scheduleMap = (() => {
    const combinedMap: Record<string, Schedule[]> = {}

    queries.forEach((query) => {
      const data = query.data ?? []
      const grouped = groupByDate(data)

      for (const date in grouped) {
        if (!combinedMap[date]) {
          combinedMap[date] = []
        }
        combinedMap[date].push(...grouped[date])
      }
    })

    return combinedMap
  })()
  return { scheduleMap }
}
