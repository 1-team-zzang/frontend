import { http, HttpResponse } from 'msw'

import { appointmentsMock } from '@/entities/appointment/mocks/appointment.mocks'
import { validateRequiredFields } from '@/shared/utils'

const REQUIRED_FIELDS = ['id', 'status', 'content'] as const

type Status = 'ACCEPTED' | 'REJECTED'

export const updateAppointmentStatusHandler = http.put('/api/appointments/requests', async ({ request }) => {
  const payload = (await request.json()) as Readonly<{
    id: string
    status: Status
    content: string
  }>

  if (!validateRequiredFields(payload, REQUIRED_FIELDS)) {
    return HttpResponse.json({
      code: 400,
      message: 'Invalid payload',
    })
  }

  const appointment = appointmentsMock.find((appointment) => appointment.appointmentId === Number(payload.id))

  if (!appointment) {
    return HttpResponse.json({
      code: 404,
      message: '약속을 찾을 수 없습니다.',
    })
  }

  return HttpResponse.json({
    code: 200,
    message: payload.status === 'ACCEPTED' ? '약속을 수락했습니다.' : '약속을 거절했습니다.',
    data: {},
  })
})
