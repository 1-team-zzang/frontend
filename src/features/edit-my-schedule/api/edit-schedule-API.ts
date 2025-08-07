import { axiosInstance } from '@/shared/api'

import type { EditScheduleRequest } from '../model/edit-schedule.types'

export async function editSchedule(data: EditScheduleRequest) {
  return axiosInstance.put(`/schedules/${data.scheduleId}`, data)
}
