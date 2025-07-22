import { http, HttpResponse } from 'msw'

import { schedulesMock } from '@/entities/schedule'
import { formatDateToYMD } from '@/shared/utils'

export const getSchedulesHandler = http.get('/api/schedules', ({ request }) => {
  const requestUrl = new URL(request.url)
  const startDate = requestUrl.searchParams.get('start')
  const endDate = requestUrl.searchParams.get('end')

  if (!validateDateParameters(startDate, endDate)) {
    return HttpResponse.json({
      code: 400,
      message: 'start와 end 파라미터가 필요합니다.',
    })
  }

  const schedulesInRange = filterSchedulesByDateRange(schedulesMock, startDate!, endDate!)

  return HttpResponse.json({
    code: 200,
    message: 'success',
    data: schedulesInRange,
  })
})

function filterSchedulesByDateRange(schedules: typeof schedulesMock, startDate: string, endDate: string) {
  return schedules.filter((schedule) => {
    const scheduleDate = formatDateToYMD(schedule.startAt)
    return startDate <= scheduleDate && scheduleDate <= endDate
  })
}

function validateDateParameters(start: string | null, end: string | null): boolean {
  return Boolean(start && end)
}
