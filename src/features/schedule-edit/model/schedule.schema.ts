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
  repeatRule: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY', '']),
  interval: z.number().min(1),
  repeatType: z.enum(['COUNT', 'DATE']).nullable(),
  repeatCount: z.number().min(1),
  repeatEndAt: z.string().nullable().optional(),
  visible: z.enum(['visible', 'invisible']),
})
  .refine(
    (data) =>
      data.repeatRule === '' ||
      (data.repeatType === 'COUNT' && typeof data.repeatCount === 'number' && data.repeatCount > 0) ||
      (data.repeatType === 'DATE' && data.repeatEndAt),
    {
      message: '반복 조건이 올바르지 않습니다.',
      path: ['repeatMode'],
    },
  )
  .refine((data) => data.start <= data.end, {
    message: '종료 시간은 시작 시간 이후여야 합니다.',
    path: ['end'],
  })

// 약속 신청 Step 1 (기본 정보만)
export const AppointmentScheduleStep1Schema = BaseScheduleSchema

// 약속 신청 Step 2 (추가 정보)
export const AppointmentScheduleStep2Schema = z.object({
  requesterName: z.string().min(1, '이름은 필수입니다'),
  requesterEmail: z.string().refine((val) => val === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: '올바른 이메일을 입력하세요',
  }),
  message: z.string().min(1, '초대 메세지를 입력하세요'),
  receiverId: z.number(),
})

// 약속 신청 전체
export const AppointmentScheduleSchema = BaseScheduleSchema.extend({
  requesterName: z.string().min(1, '이름은 필수입니다'),
  requesterEmail: z.string().refine((val) => val === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: '올바른 이메일을 입력하세요',
  }),
  message: z.string().min(1, '초대 메세지를 입력하세요'),
  receiverId: z.number(),
})

export type RegisterScheduleFormType = z.infer<typeof RegisterScheduleSchema>
export type AppointmentScheduleFormType = z.infer<typeof AppointmentScheduleSchema>
export type AppointmentScheduleStep1FormType = z.infer<typeof AppointmentScheduleStep1Schema>
export type AppointmentScheduleStep2FormType = z.infer<typeof AppointmentScheduleStep2Schema>
