import { http, HttpResponse } from 'msw'

import { schedules } from './mock-schedule'
interface LoginRequest {
  email: string
  password: string
}

export const handlers = [
  //로그인
  http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequest
    let currentUser: { id: number; email: string; name: string } | null = null

    // 더미 계정
    if (email === 'cc@cc.com' && password === '12341234') {
      currentUser = { id: 1, email, name: 'test1' }

      return HttpResponse.json(
        {
          code: 200,
          message: 'success',
          data: {
            userId: currentUser.id,
            email: currentUser.email,
            name: currentUser.name,
            profileUrl: null,
          },
        },
        {
          status: 200,
          headers: {
            // accessToken 헤더
            Authorization: 'Bearer fake-access-token-12345',
            // refreshToken 쿠키
            'Set-Cookie':
              'Refresh-Token=fake-refresh-token-67890; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=604800',
          },
        },
      )
    }

    return HttpResponse.json({ message: '로그인 실패' }, { status: 401 })
  }),

  //로그아웃
  http.post('/api/auth/logout', () => {
    return HttpResponse.json(
      { code: 200, message: 'success', data: true },
      {
        status: 200,
        headers: {
          'Set-Cookie': 'Refresh-Token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0',
        },
      },
    )
  }),

  // 일정 목록 불러오기
  http.get('/api/schedules', () => {
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        owner: true,
        scheduleResponseList: schedules,
      },
    })
  }),

  // 일정 상세 조회
  http.get('/api/schedules/:scheduleId', ({ params }) => {
    const { scheduleId } = params
    const schedule = schedules.find((s) => s.scheduleId === Number(scheduleId))
    if (!schedule) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    }
    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: schedule,
    })
  }),

  // 일정 생성
  http.post('/api/schedules', async ({ request }) => {
    const body = (await request.json()) as Partial<(typeof schedules)[number]>
    const nextId = (schedules.reduce((m, s) => Math.max(m, s.scheduleId), 0) || 0) + 1

    const now = new Date().toISOString()

    const newItem = {
      scheduleId: nextId,
      title: body.title ?? `Mock 일정 ${nextId}`,
      content: body.content ?? `${nextId}번째 일정`,
      startAt: body.startAt ?? new Date().toISOString(),
      endAt: body.endAt ?? new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      isRepeated: body.isRepeated ?? false,
      repeatRule: body.repeatRule ?? '', // RepeatRule 타입
      isVisible: body.isVisible ?? true,
      createdAt: now,
      modifiedAt: now,
      isAllDay: body.isAllDay ?? false,
      repeatType: body.repeatType ?? null,
      repeatCount: body.repeatCount ?? null,
      repeatEndAt: body.repeatEndAt ?? null,
      color: body.color ?? 'RED',
      userId: body.userId ?? 1,
      appointmentId: body.appointmentId ?? null,
    }

    schedules.push(newItem)

    return HttpResponse.json(
      {
        code: 201,
        message: 'created',
        data: {
          owner: true,
          scheduleResponseList: schedules,
        },
      },
      { status: 201 },
    )
  }),

  // 일정 수정
  http.put('/api/schedules/:scheduleId', async ({ params, request }) => {
    const { scheduleId } = params
    const body = (await request.json()) as Partial<(typeof schedules)[number]>

    const index = schedules.findIndex((s) => s.scheduleId === Number(scheduleId))
    if (index === -1) {
      return HttpResponse.json({ code: 404, message: 'Not found' }, { status: 404 })
    }

    const updated = {
      ...schedules[index],
      ...body,
      modifiedAt: new Date().toISOString(),
    }

    schedules[index] = updated

    return HttpResponse.json({
      code: 200,
      message: 'success',
      data: {
        owner: true,
        scheduleResponseList: schedules,
      },
    })
  }),
  // 일정 삭제
  http.delete('/api/schedules/:scheduleId', ({ params }) => {
    const { scheduleId } = params
    const index = schedules.findIndex((s) => s.scheduleId === Number(scheduleId))
    if (index === -1) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    }

    schedules.splice(index, 1)
    return HttpResponse.json({ success: true })
  }),
]
