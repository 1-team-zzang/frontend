export const scheduleQueryKeys = {
  all: ['schedules'] as const,
  list: ['schedules-list'] as const,
  userMonthlySchedules: (userId: number | string, start: string, end: string) =>
    [...scheduleQueryKeys.all, `user-${userId}`, `${start}~${end}`] as const,
  userSchedulesList: (userId: number | string, start: string) =>
    [...scheduleQueryKeys.list, `user-${userId}`, `${start}`] as const,
  userSchedules: (userId: number | string) => [...scheduleQueryKeys.all, userId] as const,
  shareSchedules: (userId: number | string) => [...scheduleQueryKeys.all, 'share', userId] as const,
  detailedSchedule: (scheduleId: string) => [...scheduleQueryKeys.all, 'schdule', scheduleId] as const,
}
