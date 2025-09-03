import { http, HttpResponse } from 'msw'

interface LoginRequest {
  email: string
  password: string
}

// 더미 일정 데이터 200개
const schedules = Array.from({ length: 200 }).map((_, idx) => {
  const day = (idx % 30) + 1
  return {
    scheduleId: idx + 1,
    title: `Mock 일정 ${idx + 1}`,
    startAt: `2025-09-${String(day).padStart(2, '0')}T09:00:00`,
    endAt: `2025-09-${String(day).padStart(2, '0')}T10:00:00`,
    isRepeated: idx % 10 === 0, // 10개마다 반복 일정
    repeatRule: idx % 10 === 0 ? 'WEEKLY' : null,
  }
})

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
    return HttpResponse.json(schedules)
  }),

  // 일정 상세 조회
  http.get('/api/schedules/:scheduleId', ({ params }) => {
    const { scheduleId } = params
    const schedule = schedules.find((s) => s.scheduleId === Number(scheduleId))
    if (!schedule) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    }
    return HttpResponse.json(schedule)
  }),

  // 일정 수정
  http.put('/api/schedules/:scheduleId', async ({ params, request }) => {
    const { scheduleId } = params
    const body = (await request.json()) as unknown as Partial<(typeof schedules)[number]>
    const index = schedules.findIndex((s) => s.scheduleId === Number(scheduleId))
    if (index === -1) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    }

    schedules[index] = { ...schedules[index], ...body }
    return HttpResponse.json(schedules[index])
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
