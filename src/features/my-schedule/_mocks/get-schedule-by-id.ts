import { http, HttpResponse } from 'msw'

import { schedulesMock } from '@/entities/schedule'

export const getScheduleByIdHandler = http.get('/api/schedules/:scheduleId', ({ params }) => {
  const { scheduleId: targetScheduleId } = params

  const existingSchedule = schedulesMock.find((schedule) => schedule.scheduleId === Number(targetScheduleId))

  if (!existingSchedule) {
    return HttpResponse.json({
      code: 404,
      message: '일정이 없어요',
    })
  }

  return HttpResponse.json({
    code: 200,
    message: 'success',
    data: existingSchedule,
  })
})
