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
        <ul className="overflow-y-auto h-48 scrollbar-hide">
          {notifications.map((notification) => (
            <li key={notification.createdAt}>
              {notification.content} {formatRelativeDate(new Date(notification.createdAt))}
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
