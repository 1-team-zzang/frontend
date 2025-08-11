import { Link } from 'react-router'

import { Text } from '@/shared/ui'
import { cn, formatDateTimeWithDay } from '@/shared/utils'

import { useNotificationContext } from './notification-context'

import type { Notification } from '@/entities/notification'

export default function NotificationListItem({ notification }: { notification: Notification }) {
  const isAppointment = notification.type === 'APPOINTMENT'
  const { content, createdAt } = notification

  const { onOpenChange } = useNotificationContext()

  return (
    <li key={createdAt} className="flex flex-col p-2 rounded-xl hover:bg-gray-1">
      <Link to={isAppointment ? '/appointments' : '/friends'} onClick={() => onOpenChange(false)}>
        <div className="flex items-center gap-2">
          <Text
            as="span"
            typography="caption-10"
            className={cn(
              'py-0.5 px-2 w-fit rounded-xl',
              isAppointment ? 'bg-calendar-red-alt' : 'bg-calendar-blue-alt text-calendar-blue',
            )}
          >
            {isAppointment ? '약속' : '친구'}
          </Text>
          <Text as="span" typography="label" className="text-gray-80">
            {content}
          </Text>
        </div>

        <Text as="span" typography="label" className="text-gray-50">
          {formatDateTimeWithDay(createdAt, undefined, false)}
        </Text>
      </Link>
    </li>
  )
}
