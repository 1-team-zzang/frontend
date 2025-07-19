/* eslint-disalbe */

import { http, HttpResponse } from 'msw'

export const appointmentsHandlers = [
  http.post('/api/appointments/requests', ({ request }) => {
    const createApt = request.body

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        ...createApt,
      },
    })
  }),

  http.get('/api/appointments/requests', ({ request }) => {
    const url = new URL(request.url)
    // eslint-disable-next-line unused-imports/no-unused-vars
    const page = url.searchParams.get
    // 이렇게 처리를 해주면됩니다
    // ?page=1&size=10&status=REQUESTED
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        page: 1,
        totalPages: 5,
        appointmentRequests: [
          {
            id: 1,
            title: '한강 러닝',
            requesterName: '홍길동',
            startAt: '2025-07-14 15:00',
            endAt: '2025-07-14 17:00',
            inviteAt: '2025-07-13 17:00',
          },
          {
            id: 2,
            title: '스터디',
            requesterName: '김영희',
            startAt: '2025-07-14 15:00',
            endAt: '2025-07-14 17:00',
            invitedAt: '2025-07-13 17:00',
          },
        ],
      },
    })
  }),

  http.get('/api/appointments/requests/:appointmentId', ({ params }) => {
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        appointment: {
          id: Number(params.appointmentId),
          title: '알고리즘 스터디',
          requesterName: '홍길동',
          content: '약속 메시지',
          startAt: '2025-07-09 17:00',
          endAt: '2025-07-09 20:00',
          inviteAt: '2025-07-05 20:00',
        },
      },
    })
  }),

  http.put('/api/appointments/requests', ({ request }) => {
    const { status } = request.body

    if (status === 'ACCEPT') {
      // 수락
    }

    if (status === 'REJECT') {
      // 거절
    }

    // 동현이 인배에게 7-9시 약속 신청
    // 인배는 7-9시에 약속 신청이 들어온걸 인지 하고도 8시에 약먹기를 잊지 않기 위해 일정을 등록
    // 인배가 8시에 전화하기 위한 일정 떄문에 동현의 7-9시 약속 신청을 수락하지 못한다면 문제가 있다

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {},
    })
  }),
]
