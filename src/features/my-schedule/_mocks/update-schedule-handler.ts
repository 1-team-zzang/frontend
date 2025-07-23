import { http, HttpResponse } from 'msw'

import { schedulesMock, type Schedule } from '@/entities/schedule'

import type { SchedulePayload } from '../models/my-calendar.types'

export const updateScheduleHandler = http.put('/api/schedules/:scheduleId', async ({ request, params }) => {
  const { scheduleId: targetScheduleId } = params
  const updatePayload = (await request.json()) as Partial<SchedulePayload>

  const existingSchedule = schedulesMock.find((schedule) => schedule.scheduleId === Number(targetScheduleId))

  if (!existingSchedule) {
    return HttpResponse.json({
      code: 404,
      message: '일정이 없어요',
    })
  }

  const updatedSchedule: Schedule = {
    ...existingSchedule,
    ...updatePayload,
    modifiedAt: new Date().toISOString(),
  }

  return HttpResponse.json({
    code: 200,
    message: 'success',
    data: updatedSchedule,
  })
})
