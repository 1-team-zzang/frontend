import { createContextScope } from '@/shared/utils'

const createNotificationContext = createContextScope()

export interface NotificationContextValue {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onToggleChange: () => void
}

export const [NotificationProvider, useNotificationContext] = createNotificationContext<NotificationContextValue>()
