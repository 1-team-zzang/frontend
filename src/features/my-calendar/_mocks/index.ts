/* eslint-disable */

import { http, HttpResponse } from 'msw'

export const myCalendarHandlers = [
  http.post('/api/schedules', ({ request }) => {
    const createData = request.body

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        ...createData,
      },
    })
  }),

  http.get('/api/schedules', ({ request }) => {
    const url = new URL(request.url)
    const start = url.searchParams.get('start')
    const end = url.searchParams.get('end')

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: [
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-07-18 17:00',
          endAt: '2025-07-18 19:00',
          isAllDay: false,
          isRepeated: false,
          repeatRule: 'weekly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.125945',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-08-18 13:00',
          endAt: '2025-08-18 15:00',
          isAllDay: false,
          isRepeated: false,
          repeatRule: 'yearly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.125979',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-08-05 12:00',
          endAt: '2025-08-05 14:00',
          isAllDay: false,
          isRepeated: false,
          repeatRule: 'monthly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.125994',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-08-07 18:00',
          endAt: '2025-08-07 20:00',
          isAllDay: false,
          isRepeated: false,
          repeatRule: 'weekly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.126007',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-08-03 16:00',
          endAt: '2025-08-03 18:00',
          isAllDay: false,
          isRepeated: true,
          repeatRule: 'weekly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.126020',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-07-27 09:00',
          endAt: '2025-07-27 11:00',
          isAllDay: false,
          isRepeated: false,
          repeatRule: 'yearly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.126032',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-08-12 11:00',
          endAt: '2025-08-12 13:00',
          isAllDay: false,
          isRepeated: true,
          repeatRule: 'daily',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.126045',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-08-01 10:00',
          endAt: '2025-08-01 12:00',
          isAllDay: false,
          isRepeated: false,
          repeatRule: 'weekly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.126057',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-08-10 15:00',
          endAt: '2025-08-10 17:00',
          isAllDay: false,
          isRepeated: true,
          repeatRule: 'monthly',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.126069',
        },
        {
          title: '제목',
          content: '약속 메시지',
          startAt: '2025-07-22 08:00',
          endAt: '2025-07-22 10:00',
          isAllDay: false,
          isRepeated: true,
          repeatRule: 'daily',
          isVisible: true,
          scheduledAt: '2025-07-18T08:16:45.126082',
        },
      ],
    })
  }),

  http.get('/api/schedules/:scheduleId', ({ params }) => {
    const { scheduleId } = params

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: [
        {
          title: '제목',
          content: `약속 메시지 ${scheduleId}`,
          startAt: '2025-07-09 15:00',
          endAt: '2025-07-09 17:00',
          isAllDay: false,
          isRepeated: true,
          repeatRule: 'weekly',
          isVisible: true,
          scheduledAt: new Date(),
        },
        {
          title: '제목',
          content: `약속 메시지 ${scheduleId}`,
          startAt: '2025-07-09 15:00',
          endAt: '2025-07-09 17:00',
          isAllDay: false,
          isRepeated: true,
          repeatRule: 'weekly',
          isVisible: true,
          scheduledAt: new Date(),
        },
      ],
    })
  }),

  http.put('/api/schedules/:scheduleId', ({ request }) => {
    const updateData = request.body

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        ...updateData,
        title: '제목',
        content: '일정 수정',
        startAt: '2025-07-09 15:00',
        endAt: '2025-07-09 17:00',
        isAllDay: false,
        isRepeated: true,
        repeatRule: 'weekly',
        isVisible: true,
        scheduledAt: new Date(),
      },
    })
  }),

  http.delete('/api/schedules/:scheduleId', () => {
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {},
    })
  }),
]
