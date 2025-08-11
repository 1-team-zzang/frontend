import { forwardRef, Suspense, type ComponentPropsWithoutRef } from 'react'

import { useIntersect } from '@/shared/hooks'
import { Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

import { useNotification } from '../model'

import NotificationListItem from './notification-list-item'
import NotificationListSkeleton from './notification-list-skeleton'

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
          'absolute z-dropdown top-4 -right-20 m-4 h-68 rounded-2xl w-fit sm:w-96 bg-white shadow-2xl p-4 whitespace-nowrap',
          className,
        )}
        {...restProps}
      >
        <Text as="h2" typography="b1-heading" className="mb-4">
          캘픽 알림
        </Text>

        <Suspense fallback={<NotificationListSkeleton />}>
          <ul className="overflow-y-auto h-48 scrollbar-hide flex flex-col">
            {notifications.map((notification) => (
              <NotificationListItem
                notification={notification}
                key={`${notification.createdAt}-${notification.content.slice(0, 20)}`}
              />
            ))}
            <div className="h-[1px]" ref={observerRef} />
          </ul>
        </Suspense>
      </div>
    )
  },
)

NotificationList.displayName = 'NotificationList'
export default NotificationList
