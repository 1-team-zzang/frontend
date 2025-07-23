import { http, HttpResponse } from 'msw'

import { appointmentsMock } from '@/entities/appointment/mocks/appointment.mocks'

export const getAppointmentDetailHandler = http.get('/api/appointments/requests/:appointmentId', ({ params }) => {
  const { appointmentId } = params

  const appointment = appointmentsMock.find((appointment) => appointment.appointmentId === Number(appointmentId))

  if (!appointment) {
    return HttpResponse.json({
      code: 404,
      message: '약속을 찾을 수 없습니다.',
    })
  }

  return HttpResponse.json({
    code: 200,
    message: 'success',
    data: {
      appointment: {
        ...appointment,
      },
    },
  })
})
