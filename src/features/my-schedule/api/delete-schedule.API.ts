import axiosInstance from '@/shared/api/axios-instance'

export default async function deleteSchedule(scheduleId: number) {
  await axiosInstance.delete(`/schedules/${scheduleId}`)
}
