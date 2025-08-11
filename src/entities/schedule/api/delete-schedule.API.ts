import axiosInstance from '@/shared/api/axios-instance'

export async function deleteSchedule(scheduleId: number) {
  await axiosInstance.delete(`/schedules/${scheduleId}`)
}
