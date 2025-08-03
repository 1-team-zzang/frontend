import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import { useIntersect } from '@/shared/hooks'
import { Text } from '@/shared/ui'
import { cn, formatRelativeDate } from '@/shared/utils'

import useNotification from '../model/use-notification'

// TODO 디자인 시안 나오면 디자인 수정
const NotificationList = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref) => {
    const { data, hasNextPage, fetchNextPage } = useNotification()

    const observerRef = useIntersect<HTMLDivElement>({
      onIntersect: (entry, _observer) => {
        if (entry.isIntersecting) {
          if (hasNextPage) {
            fetchNextPage()
          }
        }
      },
    })

    const notifications = data?.notifications ?? []

    return (
      <div
        ref={ref}
        className={cn(
          'absolute top-4 -right-20 m-4 h-64 w-96 rounded bg-white shadow-2xl p-4 whitespace-nowrap',
          className,
        )}
        {...restProps}
      >
        <Text as="h2" typography="b1-heading">
          notification
        </Text>
        <ul className="overflow-y-auto h-48 scrollbar-hide flex flex-col gap-2">
          {notifications.map((notification) => (
            <li key={notification.createdAt} className="flex flex-col">
              <Text as="span" typography="label">
                {notification.type === 'APPOINTMENT' ? '약속' : '친구'}
              </Text>
              <div className="flex items-center justify-between">
                <Text as="span" typography="label">
                  {notification.content}
                </Text>
                <Text as="span" typography="label" className="text-gray-500">
                  {formatRelativeDate(new Date(notification.createdAt))}
                </Text>
              </div>
            </li>
          ))}
          <div className="h-[1px]" ref={observerRef} />
        </ul>
      </div>
    )
  },
)

NotificationList.displayName = 'NotificationList'
export default NotificationList
