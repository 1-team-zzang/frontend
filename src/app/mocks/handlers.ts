import { appointmentsHandlers } from '@/features/appointment/_mocks'
import { friendsHandlers } from '@/features/friends/_mocks'
import { myScheduleHandlers } from '@/features/my-schedule/_mocks'

export const handlers = [...friendsHandlers, ...myScheduleHandlers, ...appointmentsHandlers]
