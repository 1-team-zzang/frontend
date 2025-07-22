import { http, HttpResponse } from 'msw'

import { schedulesMock, type Schedule } from '@/entities/schedule'
import { isUndefined } from '@/shared/utils'

import type { SchedulePayload } from '../models/my-calendar.types'

const REQUIRED_FIELDS = ['title', 'startAt', 'endAt', 'color'] as const

const OPTIONAL_FIELDS = ['isRepeated', 'repeatRule', 'repeatType', 'repeatCount', 'content', 'isVisible'] as const

export const createSheduleHandler = http.post('/api/schedules', async ({ request }) => {
  const createPayload = (await request.json()) as SchedulePayload

  if (!validateScheduleData(createPayload)) {
    return HttpResponse.json({
      status: 'error',
      code: 400,
      message: '필수 필드가 누락되었습니다.',
    })
  }

  const newlyCreatedSchedule = createNewSchedule(createPayload)
  schedulesMock.push(newlyCreatedSchedule)

  return HttpResponse.json({
    code: 200,
    message: 'success',
    data: newlyCreatedSchedule,
  })
})

function createNewSchedule(scheduleData: SchedulePayload): Schedule {
  return {
    ...scheduleData,
    scheduleId: schedulesMock.length + 1,
    userId: 1,
    appointmentId: null,
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
    repeatEndAt: null,
  }
}

function validateScheduleData(data: SchedulePayload): boolean {
  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) {
      return false
    }
  }

  for (const field of OPTIONAL_FIELDS) {
    if (isUndefined(data[field])) {
      return false
    }
  }

  return true
}
