import axiosInstance from '@/shared/api/axios-instance'

import type { NotificationResponse } from '@/entities/notification/models/notification.types'

export async function getNotification(page = 1, size = 10): Promise<NotificationResponse> {
  const { data } = await axiosInstance.get('/notification', {
    params: {
      page,
      size,
    },
  })

  return data.data
}
