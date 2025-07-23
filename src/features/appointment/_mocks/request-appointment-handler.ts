import { http, HttpResponse } from 'msw'

import { validateRequiredFields } from '@/shared/utils'

import type { RequestAppointmentPayload } from '../models/appointment.types'

const REQUIRED_FIELDS = [
  'title',
  'startAt',
  'endAt',
  'requesterName',
  'requesterEmail',
  'isAllDay',
  'color',
  'content',
] as const

export const requestAppointmentHandler = http.post('/api/appointments/requests', async ({ request }) => {
  const requestPayload = (await request.json()) as RequestAppointmentPayload

  if (!validateRequiredFields(requestPayload, REQUIRED_FIELDS)) {
    return HttpResponse.json({
      status: 'error',
      code: 400,
      message: '필수 필드가 누락되었습니다.',
    })
  }

  return HttpResponse.json({
    code: 200,
    message: 'success',
    data: {},
  })
})
