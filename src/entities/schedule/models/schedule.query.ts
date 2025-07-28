//TODO startdate, enddate query keys로 받도록 수정

export const scheduleQueryKeys = {
  all: ['schedules'] as const,
  userSchedules: (userId: number | string) => [...scheduleQueryKeys.all, 'user', userId] as const,
}
