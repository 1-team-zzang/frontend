import type { Schedule } from '@/entities/schedule'

export type SchedulePayload = Pick<
  Schedule,
  | 'title'
  | 'content'
  | 'startAt'
  | 'endAt'
  | 'isRepeated'
  | 'repeatRule'
  | 'repeatType'
  | 'repeatCount'
  | 'color'
  | 'isVisible'
>
