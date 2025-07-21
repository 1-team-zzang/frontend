import { appointmentsHandlers } from '@/features/appointment/_mocks'
import { friendsHandlers } from '@/features/friends/_mocks'
import { myCalendarHandlers } from '@/features/my-calendar/_mocks'

export const handlers = [...friendsHandlers, ...myCalendarHandlers, ...appointmentsHandlers]
