/* eslint-disable */

import { http, HttpResponse } from 'msw'

export const handlers = [
  // 친구 요청 보내기 (POST)
  http.post('/api/friends/requests', ({ request }) => {
    const friendId = request.body
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {},
    })
  }),

  // 친구 요청 목록 조회 (GET)
  http.get('/api/friends/requests', () => {
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        friendRequests: [
          {
            friendRequestId: 1,
            name: '홍길동',
            profileUrl: 'url1',
          },
          {
            friendRequestId: 2,
            name: '김영희',
            profileUrl: 'url2',
          },
        ],
      },
    })
  }),

  // 친구 요청 수락/거절(PUT)
  http.put('/api/friends/requests', () => {
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {},
    })
  }),

  // 친구 목록 조회(GET)
  http.get('/api/friends', () => {
    return HttpResponse.json({
      data: {
        friends: [
          {
            id: 1,
            name: '홍길동',
            profileUrl: 'url',
          },
          {
            id: 2,
            name: '김영희',
            profileUrl: 'url',
          },
        ],
      },
    })
  }),

  //친구 삭제(DELETE)
  http.delete('api/friends/{friendId}', ({ params }) => {
    const { friendId } = params
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {},
    })
  }),

  //친구 캘린더 조회
  http.get('/api/friends/{friendId}/schedules', ({ params, request }) => {
    const url = new URL(request.url)
    const start = url.searchParams.get('start')
    const end = url.searchParams.get('end')

    const { friendId } = params
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        schedules: [
          {
            scheduleId: 1,
            title: '알고리즘 스터디',
            visibility: 'PRIVATE',
            startAt: '2025-07-15 15:00',
          },
          {
            scheduleId: 3,
            title: '헬스',
            visibility: 'PUBLIC',
            startAt: '2025-07-15 17:00',
          },
        ],
      },
    })
  }),

  //친구 세부일정 조회(GET)
  http.get('/api/friends/:friendId/calendar/:scheduleId', ({ params }) => {
    const { friendId, scheduleId } = params

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        schedule: {
          scheduleId: scheduleId,
          title: '알고리즘 스터디',
          content: '알고리즘 스터디',
          startAt: '2025-07-09 17:00',
          endAt: '2025-07-09 20:00',
          visibility: 'PRIVATE',
          isRepeated: true,
          repeatRule: 'WEEKLY',
        },
      },
    })
  }),
]

const 친구 = [
  {
    userId: 1,
    name: '박인배',
    calendar: {
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
    },
  },
  {
    userId: 2,
    name: '이동현',
    calendar: {
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
    },
  },
  {
    userId: 3,
    name: '최민경',
    calendar: {
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
    },
  },
]
