import z from 'zod'

// 공통
export const BaseScheduleSchema = z.object({
  title: z.string().min(1, '일정 제목을 입력하세요'),
  color: z.string(),
  start: z.date(),
  end: z.date(),
  isAllDay: z.boolean(),
  content: z.string().min(1, '일정 내용을 적어주세요'),
})

// 일정 등록
export const RegisterScheduleSchema = BaseScheduleSchema.extend({
  repeatUnit: z.enum(['none', 'day', 'week', 'month', 'year']),
  interval: z.number().min(1),
  repeatMode: z.enum(['count', 'date']).optional(),
  repeatCount: z.number().min(1),
  repeatEndAt: z.string().nullable().optional(),
  visible: z.string(),
}).refine(
  (data) =>
    (data.repeatMode === 'count' && typeof data.repeatCount === 'number' && data.repeatCount > 0) ||
    (data.repeatMode === 'date' && data.repeatEndAt),
  {
    message: '반복 조건이 올바르지 않습니다.',
    path: ['repeatMode'],
  },
)

// 약속 신청
export const AppointmentScheduleSchema = BaseScheduleSchema.extend({
  requesterName: z.string().min(1, '이름은 필수입니다'),
  requesterEmail: z.string().email('올바른 이메일을 입력하세요'),
  receiverId: z.number(),
})

export type RegisterScheduleFormType = z.infer<typeof RegisterScheduleSchema>
export type AppointmentScheduleFormType = z.infer<typeof AppointmentScheduleSchema>
