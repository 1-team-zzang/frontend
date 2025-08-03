import type { PaginatedResponse } from '@/shared/types/api.types'

export type NotificationType = 'APPOINTMENT' | 'FRIEND'

export interface Notification {
  content: string
  type: string
  createdAt: string
}

export type NotificationResponse = PaginatedResponse<Notification, 'notifications'>
