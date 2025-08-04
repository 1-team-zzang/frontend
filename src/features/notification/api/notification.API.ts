import { axiosInstance } from '@/shared/api'

import type { NotificationResponse } from '@/entities/notification/models'

export async function getNotification(page = 1, size = 10): Promise<NotificationResponse> {
  const { data } = await axiosInstance.get('/notification', {
    params: {
      page,
      size,
    },
  })

  return data.data
}
