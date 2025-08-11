export const scheduleQueryKeys = {
  all: ['schedules'] as const,
  userSchedules: (userId: number | string, start: string, end: string) =>
    [...scheduleQueryKeys.all, `user-${userId}`, `${start}~${end}`] as const,
  shareSchedules: (userId: number | string) => [...scheduleQueryKeys.all, 'share', userId] as const,
  detailedSchedule: (scheduleId: string) => [...scheduleQueryKeys.all, 'schedule', scheduleId] as const,
}
