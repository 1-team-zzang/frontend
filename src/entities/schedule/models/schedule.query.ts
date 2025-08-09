export const scheduleQueryKeys = {
  all: ['schedules'] as const,
  list: ['schedules-list'] as const,
  mySchedules: (userId: number | string, start: string, end: string) =>
    [...scheduleQueryKeys.all, `my-${userId}`, `${start}~${end}`] as const,
  friendSchedules: (userId: number | string, start: string, end: string) =>
    [...scheduleQueryKeys.list, `friend-${userId}`, `${start}~${end}`] as const,
  userSchedules: (userId: number | string) => [...scheduleQueryKeys.all, userId] as const,
  shareSchedules: (userId: number | string) => [...scheduleQueryKeys.all, 'share', userId] as const,
  detailedSchedule: (scheduleId: string) => [...scheduleQueryKeys.all, 'schdule', scheduleId] as const,
}
