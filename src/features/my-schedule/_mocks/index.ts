import { createSheduleHandler } from './create-schedule-handler'
import { deleteScheduleHandler } from './delete-schedule-handler'
import { getScheduleByIdHandler } from './get-schedule-by-id'
import { getSchedulesHandler } from './get-schedules-handler'
import { updateScheduleHandler } from './update-schedule-handler'

export const myScheduleHandlers = [
  getScheduleByIdHandler,
  getSchedulesHandler,
  createSheduleHandler,
  updateScheduleHandler,
  deleteScheduleHandler,
]
